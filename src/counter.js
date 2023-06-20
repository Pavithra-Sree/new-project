import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import CreateIcon from '@mui/icons-material/Create';
import { Link, useNavigate } from "react-router-dom";

export function Counter() {
  //let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const navigate = useNavigate();
  return (
    <div>
      {/* onClick = camelCase */}
      <IconButton
        aria-label="likebutton"
        onClick={() => setLike(like + 1)}
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          <EmojiEmotionsIcon/>
        </Badge>
      </IconButton>

      <IconButton
        aria-label="disikebutton"
        onClick={() => setDislike(dislike + 1)}
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          <FavoriteSharpIcon/>
        </Badge>
      </IconButton>
      {/* <IconButton
      onClick={() => navigate(`/edit/${id}`)}
      > 
      <CreateIcon>
      </CreateIcon>
      </IconButton> */}

      {/* <button onClick={() => setLike(like + 1)}>👍{like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎{dislike}</button> */}
    </div>
  );
}
