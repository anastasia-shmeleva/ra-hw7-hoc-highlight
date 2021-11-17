const Video = (props) => {
  return (
      <div className="item item-video">
          <iframe title={'myFrame'} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p className="views">Просмотров: {props.views}</p>
      </div>
  )
};

export default Video;