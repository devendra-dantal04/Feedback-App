import React,{ useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";
import { useContext } from "react";

const FeedbackForm = () => {

    const {handleAdd, feedbackEdit, updateFeedback} = useContext(FeedbackContext);
    const [text,setText] = useState('');
    const [rating,setRating] = useState(10);
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('');

    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleChangeText = (e) =>{
        if(text === ''){
            setMessage(null);
            setBtnDisabled(true);
        }else if (text !== '' && text.trim().length <= 10){
            setMessage("Message must be at least 10 characters.");
            setBtnDisabled(true);
        }else{
            setMessage(null);
            setBtnDisabled(false);
        }


        setText(e.target.value);
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback);
            }else{
                handleAdd(newFeedback);
            }



            setText('');
            setBtnDisabled(true);
        }


    }

  return <Card>
    <form onSubmit={handleSubmit} >
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
            <input value={text} onChange={handleChangeText} type="text" placeholder="Write a Review" />
            <Button type={"submit"} isDisabled={btnDisabled} > Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
    </form>
  </Card>;
};

export default FeedbackForm;
