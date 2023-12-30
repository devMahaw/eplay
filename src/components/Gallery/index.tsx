import { useState } from "react";
import Section from "../Section";
import { Items, Item, Action, Modal, ModalContent } from "./styles";
import hogwarts from "../../assets/images/fundo_hogwarts.png";
import spiderman from "../../assets/images/banner-homem-aranha.png";
import play from "../../assets/images/play.png";
import zoom from "../../assets/images/zoom.png";
import close from "../../assets/images/fechar.png";
import { GalleryItem } from "../../pages/Home";

const mock: GalleryItem[] = [
  {
    type: "image",
    url: spiderman
  },
  {
    type: "image",
    url: hogwarts
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/uHGShqcAHlQ?si=-pFr0OVy0lX-HqBb"
  }
];

type Props = {
  defaultCover: string;
  name: string;
};

interface ModalState extends GalleryItem {
  isVisible: boolean;
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: "image",
    url: ""
  });

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === "image") return item.url;
    return defaultCover;
  };

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === "image") return zoom;
    return play;
  };

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: "image",
      url: ""
    });
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                });
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? "visible" : ""}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img onClick={() => closeModal()} src={close} alt="X" />
          </header>
          {modal.type === "image" ? (
            <img src={modal.url} alt="Modal do Jogo" />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  );
};

export default Gallery;
