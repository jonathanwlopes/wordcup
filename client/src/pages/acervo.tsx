import { useMutation, useQuery } from '@apollo/client'
import Figure from 'components/Figure'
import { QUERY_GET_NATIONS } from 'graphql/query/getNations'
import { useState } from 'react'
import Modal from 'react-modal'
import * as S from '../templates/Collection/styles'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
import { MUTATION_UPDATE_FIGURES } from 'graphql/mutations/updateFigures'
import { QUERY_ALBUM_BY_USER } from 'graphql/query/getAlbumByUser'
import { QUERY_GET_ALL_FIGURES } from 'graphql/query/getAllFigures'
import { QUERY_PROFILE_ME } from 'graphql/query/profile'
import { GetServerSidePropsContext } from 'next'
import { Base } from 'templates/Base'
import { initializeApollo } from 'utils/apollo'
import protectedRoutes from 'utils/protected-routes'
import { sortFigures } from 'utils/sortFigures'

export default function Collection({ albums }: any) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const figures = albums.albums.data[0].attributes.figures

  const { data: listFigures } = useQuery(QUERY_GET_ALL_FIGURES)
  const { data } = useQuery(QUERY_GET_NATIONS)
  const [currentNation, setCurrentNation] = useState() as any
  const [updateFigures, { error }] = useMutation(MUTATION_UPDATE_FIGURES, {
    onError: (err) => console.log(err)
  })
  const [listWin, setListWin] = useState([])

  const nationsName = data?.nations.data.map((nation) => nation.attributes.name)

  if (!nationsName) return null

  const currentFigures = figures.data.filter(
    (figure) =>
      figure.attributes.player.data.attributes.nation.data.attributes.name ===
      (currentNation || nationsName[0])
  )

  const handleClick = async () => {
    const figuresWin = sortFigures(listFigures)
    const incomingFiguresId = figuresWin.map((figure) => Number(figure.id))
    const currentFiguresListIds = figures.data.map((figure) =>
      Number(figure.id)
    )

    setListWin(figuresWin)
    openModal()

    updateFigures({
      variables: {
        id: 14,
        data: {
          figures: [...currentFiguresListIds, ...incomingFiguresId],
          user: 4
        }
      }
    })
  }

  return (
    <Base>
      <S.Container>
        <S.Center>
          <S.InfoAlbum>
            <S.WrapperText>
              <S.Title>Suas figurinhas</S.Title>
              <S.Description>
                Este é seu acervo de figurinhas. Clique para colar ou trocar.
              </S.Description>
            </S.WrapperText>
            <S.ButtonAlbum>Ver meu álbum</S.ButtonAlbum>
          </S.InfoAlbum>
        </S.Center>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onActiveIndexChange={(swiper) => {
            setCurrentNation(
              Array.from(swiper.slides)[swiper.activeIndex]?.textContent
            )
          }}
        >
          {nationsName &&
            nationsName.map((nation, idx) => (
              <SwiperSlide key={idx}>{nation}</SwiperSlide>
            ))}
        </Swiper>
        <S.WrapperFigures>
          {currentFigures.map((figure, idx) => (
            <Figure
              key={idx}
              name={figure.attributes.player.data.attributes.name}
              photo={
                figure.attributes.player.data.attributes.photo.data[0]
                  ?.attributes.url
              }
              position={
                figure.attributes.player.data.attributes.position.data
                  .attributes.name
              }
            />
          ))}
        </S.WrapperFigures>
        <S.WinFigures onClick={handleClick}>Ganhar mais</S.WinFigures>
      </S.Container>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h1>Você Ganhou!!</h1>
        {console.log(listWin)}
        {listWin.map((win, idx) => (
          <Figure
            key={idx}
            name={win.attributes.player.data.attributes.name}
            photo={
              win.attributes.player.data.attributes.photo.data[0]?.attributes
                .url
            }
            position={
              win.attributes.player.data.attributes.position.data.attributes
                .name
            }
          />
        ))}
      </Modal>
    </Base>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await protectedRoutes(ctx)

  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })

  const { data: albums } = await apolloClient.query({
    query: QUERY_ALBUM_BY_USER,
    variables: {
      filters: {
        user: {
          email: {
            eq: session?.user?.email
          }
        }
      }
    }
  })

  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email,
      albums
    }
  }
}
