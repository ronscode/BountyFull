const intiialState = {
    bounty: {
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
        isVerified : false,
        isPaid : false
    },

    users: {
        user_id : 0,
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
    let { type, bounty, user, picture } = actions

    switch(type){

        //ALL USER
        case "SAVE_USER": 
        return{
            ...state,
            users : user
            
        }
        case "GET_BOUNTY": 
        return{
            ...state,
            bounty : bounty
        }
        case "PICTURE": 
        return{
            ...state,
            picture : picture
        }
        
        //CLEANER STORY 
        case "PICK_BOUNTY": 
        return{
            
        }
        case "START_BOUNTY": 
        return{
            ...state,
            before_pic_url : state.bounty.picture.before_pic_url,
            isStarted : !state.bounty.isStarted
        }
        case "COMPLETE_BOUNTY": 
        return{
            
        }

        //POSTER
        case "POST_BOUNTY": 
        return{
            ...state,
            user: {
                ...user,
                user_id : state.bounty.poster_id
            }
        }
        case "VERIFY_BOUNTY": 
        return{
            ...state,
            isComplete : !state.isComplete,
            isPaid : !state.bounty.isPaid

        }

        default :
         return{
             ...state
         }
    }

}