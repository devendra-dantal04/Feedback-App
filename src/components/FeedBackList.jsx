import React from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";
import {motion, AnimatePresence} from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";


const FeedBackList = ({ handleDelete}) => {
 
 const { feedback, isLoading } = useContext(FeedbackContext)   
  

 if(!isLoading && (!feedback || feedback.length === 0)){
        return <h1>No Feedback Yet.</h1>
 }

 return isLoading ? <Spinner /> : (<div className="feedback-list">
 <AnimatePresence>
 {feedback.map((item)=>(
     <motion.div
         key = {item.id}
         initial = {{opacity : 0}}
         animate={{opacity:1}}
         exit={{opacity:0}}
     >
     <FeedbackItem 
         key={item.id} 
         item={item} 
         handleDelete={handleDelete}/>
     </motion.div>
     
 ))}</AnimatePresence>
</div>);

};



// FeedBackList.propTypes = {
//     feedback : PropTypes.arrayOf(
//         PropTypes.shape({
//             // id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedBackList;
