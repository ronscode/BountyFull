const intiialState = {
    bounty: {
        bounty_id: 1,
        poster_id : 0,
        claimed_id : 0,
        bounty_amount : 0,
        picture :{
            post_picture_url : '',
            before_pic_url : '',
            after_pic_url : ''
        },
        location: '',
        time_started : '',
        time_completed: '',
        isStarted : false,
        isComplete : false,
        isVerified : false
    },

    users: {
        user_id: 0,
        firstName : '',
        lastName : '',
        email : '',
        user_bio : '',
        total_earnings : '',
        total_time : '',
        profile_pic :'',
        complete : [],
        posted : [],
        inProgress: false
    }
}


const reducer = (state = intiialState, actions) =>{

    //destructured payloads
    let { type, user,  } = actions

    switch(type){

        //ALL USER
        case "SAVE_USER": 
        return{
            ...state,
            users : user
            
        }
        case "GET_BOUNTY": 
        return{
            
        }
        case "PICTURE": 
        return{
            
        }
        
        //CLEANER STORY 
        case "PICK_BOUNTY": 
        return{
            
        }
        case "START_BOUNTY": 
        return{
            
        }
        case "COMPLETE_BOUNTY": 
        return{
            
        }

        //POSTER
        case "POST_BOUNTY": 
        return{
            
        }
        case "VERIFY_BOUNTY": 
        return{
            ...state,
            isComplete : !state.isComplete
        }

        default :
         return{
             ...state
         }
    }

}