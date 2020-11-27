import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {createAPI} from "../../services/api";

const ReviewForm = (props) => {
  // const {handleSubmit, handleFieldChange, handlePostReview, error, isSendButtonEnable, id} = props;
  const {id} = props;
  const [internalState, setInternalState] = useState({
    rating: `5`,
    reviewText: ``,
    error: ``,
    isSendButtonEnable: false
  });
  let {rating, reviewText, error, isSendButtonEnable} = internalState;
  let setRatingState = (evt)=>{
    setInternalState(
        Object.assign(
            {}, internalState, {
              rating: evt.target.value
            }));
  };
  useEffect(()=>{
    if (reviewText.length < 50 || reviewText.length > 400 || rating === ``) {
      setInternalState(
          Object.assign(
              {}, internalState, {
                isSendButtonEnable: false
              }));
    } else {
      setInternalState(
          Object.assign(
              {}, internalState, {
                isSendButtonEnable: true
              }));
    }
  }, [reviewText, rating]);

  return (
    <form onSubmit={(evt)=>{
      evt.preventDefault();
    }} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input onChange={setRatingState} className="rating__input" id="star-1" type="radio" name="rating"
            value="1"/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>

          <input onChange={setRatingState} className="rating__input" id="star-2" type="radio" name="rating"
            value="2"/>
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input onChange={setRatingState} className="rating__input" id="star-3" type="radio" name="rating" value="3"/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input onChange={setRatingState} className="rating__input" id="star-4" type="radio" name="rating"
            value="4"/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input onChange={setRatingState} className="rating__input" id="star-5" type="radio" name="rating"
            value="5"/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={(evt)=>{
          setInternalState(
              Object.assign(
                  {}, internalState, {
                    reviewText: evt.target.value
                  }));
        }} className="add-review__textarea" name="reviewText" id="reviewText"
        placeholder="Review text"/>
        <div className="add-review__submit">
          <button disabled={!isSendButtonEnable} onClick={()=>{
            setInternalState(
                Object.assign(
                    {}, internalState, {
                      isSendButtonEnable: false
                    }));
            const api = createAPI();
            api.post(`/comments/${id}`, {rating, comment: reviewText}).
            then(()=>{
              setInternalState(
                  Object.assign(
                      {}, internalState, {
                        error: ``
                      }));
              history.back();
            }).
            catch(()=>{
              setInternalState(
                  Object.assign(
                      {}, internalState, {
                        isSendButtonEnable: true,
                        error: true
                      }));
            });
          }} className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
      {error === true ? <p>Произошла ошибка. Повторите попытку позже.</p> : ``}
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool.isRequired, PropTypes.string.isRequired]),
};

export default ReviewForm;


