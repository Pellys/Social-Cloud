import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {

  
  
  return (
    
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <input id="upload-photo"  type="file" class="inputfile"/> 
               
                <label for="upload-photo">
                <PermMedia htmlColor="tomato" className="shareIcon"/>
                </label>  
                <text className="shareOption">Carica immagine</text> 
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
                  </div>

  );
}

/*

API TO LOAD IMAGE:

var loadingImage = loadImage(
  'https://example.org/image.png',
  function (img) {
    document.body.appendChild(img)
  },
  { maxWidth: 600 }
)

*/ 