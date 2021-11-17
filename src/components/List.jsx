/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import shortid from "shortid";
import Video from "./Video";
import Article from "./Article";
import HighlightHOC from "./HighlightHOC";

const VideoHoc = HighlightHOC(Video);
const ArticleHoc = HighlightHOC(Article);

const List = (props) => {
  return props.list.map(item => {
      switch (item.type) {
          case 'video':
              return (
                  <VideoHoc  {...item} key={shortid.generate()}/>
              );

          case 'article':
              return (
                  <ArticleHoc {...item} key={shortid.generate()}/>
              );
      }
  });
};

export default List;