import Image from "next/image";
import "@fontsource/mulish";

// const myLoader = ({ src, width, quality}) => {
//   return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
// };

export default function ImageHeader(params) {
  var today = new Date();

  var date =
    today.toLocaleString("default", { month: "long" }) +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();
  //   const matches = useMediaQuery("(min-width: 641px)")
  return (
    <>
      <div className="container">
        <div
          className="image_container"
          style={{ width: "58%", height: "100%", position: "relative" }}
        >
          <Image
            src="/evening.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="images"
          />
        </div>
        <div className="text_container">
          <h2 className="hello">{`${params.title.toUpperCase()}`}</h2>
          <hr />
          <p className="date">{date}</p>
          <p>{params.body}</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            width: 100%;
            margin-bottom: 20px;
            flex-direction: row;
            border-radius: 10px;
            overflow: hidden;
            background: rgba(255, 255, 255, 1);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 1);
            height: 80vh;
          }
          .images {
            height: 100%;
          }
          .image_container {
            border-radius: 10px;
            overflow: hidden;
          }
          .text_container {
            width: 42%;
            font-family: Mulish;
            line-height: 60px;
            font-size: 20px;
            margin-left: 10px;
          }
          p {
            line-height: 40px;
          }
          .date {
            color: #7f8ca1;
            font-style: italic;
          }
          .hello {
            color: rgba(100, 21, 255, 1);
            position: relative;
            font-weight: 900;
          }
          .hello::after {
            content: "";
            width: 40%;
            position: absolute;
            height: 0.175rem;
            background: #ea0e4b;
            bottom: 0;
            left: 0;
          }
          hr {
            color: rgba(0, 0, 0, 1);
            height: 1.5px;
            /* Set the hr color */
            color: #333; /* old IE */
            background-color: #333; /* Modern Browsers */
            display: none;
          }
        `}
      </style>
    </>
  );
}
