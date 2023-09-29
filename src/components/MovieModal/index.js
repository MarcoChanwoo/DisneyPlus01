import React from "react";
import "./MovieModal.css";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  return (
    <div className="presentation" role="presentation">
      <div className="wrapper-modal">
        <span onClick={() => setModalOpen(false)} className="modal-close">
          X
        </span>
        <img
          className="modal_poster-img"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt="modal-img"
        />
        <div className="modal_content">
          <p className="modal_details">
            <span className="modal_user_perc">100% for you</span>{" "}
            {release_date ? release_date : first_air_date}
          </p>

          <h2 className="modal_title">{title ? title : name}</h2>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
