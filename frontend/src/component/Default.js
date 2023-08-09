import styles from "../styles/Default.module.css";
export const Default = () => {
  const Playlists = [
    {
      img: "https://wallpaperaccess.com/full/4595687.jpg",
      title: "Anime",
      des: "Anime cool playlist",
    },
    {
      img: "https://i.pinimg.com/564x/29/89/48/298948bdb1e43af7c4a36c973fea7f24.jpg",
      title: "Lana del rey",
      des: "Cinematic",
    },
    {
      img: "https://i.pinimg.com/564x/05/09/fd/0509fd6da8a44530d33ebbe10ae3a667.jpg",
      title: "Billie Eilish",
      des: "Anime cool playlist",
    },
    {
      img: "https://i.pinimg.com/564x/d2/df/7f/d2df7f308648a0b058d012c13e319b05.jpg",
      title: "Weeknd",
      des: "Relax",
    },
    {
      img: "https://i.pinimg.com/564x/3b/52/f3/3b52f3c983ae77ccc6dd517e1914c5e6.jpg",
      title: "The Neighbourhood",
      des: "Anime cool playlist",
    },
    {
      img: "https://i.pinimg.com/564x/38/f9/b2/38f9b2b481e9c5e73a33a687057a40ad.jpg",
      title: "Bruno Mars",
      des: "Relax",
    },
    // {
    //   img: "https://i.pinimg.com/564x/e5/77/ed/e577ed472228f60592b2e5d04a383402.jpg",
    //   title: "BlackPink",
    //   des: "Anime cool playlist",
    // },
    // {
    //   img: "https://i.pinimg.com/564x/97/0b/e4/970be43168900925219864f95fa246ee.jpg",
    //   title: "Eminem",
    //   des: "Relax",
    // },
  ];
  return (
     <>
      {Playlists &&
        Playlists.map((playlist, index) => (
          <div className={styles.card}>
            <img src={playlist.img} className={styles.img} alt="play"></img>
            <div className={styles.text}>
              <p className={styles.name}>{playlist.title}</p>
              <p className={styles.des}>{playlist.des}</p>
            </div>
          </div>
        ))}
     </>
  );
};
