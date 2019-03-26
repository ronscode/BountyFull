const intiialState = {
    bounty: {
        poster_id : 0,               // id of the bounty poster.
        claimed_id : 0,              //once a user(cleaner) claimes a bounty then the claimed id is the user who chose the bounty.
        bounty_amount : 0,           //amount of the boutny 
        picture :{
            post_picture_url : '',   //posters pic of a bounty upon creation.
            before_pic_url : '',     //before pic when bounty spaces are not cleaned and ready to start.
            after_pic_url : ''       //after pic when bounty space is cleaned
        },
        location: 'Bounties in Atlanta Ga',                //bounty location.
        time_started : Date(),           // onve user starts a bounty the timestamp displays start time.
        time_completed: '',          //once the user finished the clean up time stops the after picture is taken and the verification process begins.
        isStarted : false,           //once the user takes the before pic and see the 
        isCleaned : false,           //sent to the poster once the user states that the chosen bounty is comlete from a cleaners POV
        isVerified : false,          //once the user sends that the clean up is complete then the poster needs to verify 
        isPaid : false,              //one the poster verifies that this is complete the poster can then issue / release payments.
        isComplete : false           //once all steps of verifcation is complete the bounty is closed. 
    },
    user: {
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
        inProgress: false           //Once the user is starts a bounty inProgress is true.
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
            user : user //this is an object
            
        }

        //list bouty action somewhere 


        case "GET_BOUNTY": 
        return{
            ...state,
            bounty : bounty
        }
        case "PICTURE": 
        return{
            ...state,
            bounty : {
                ...state.bounty,
                picture : picture
            }

        }
        
        //CLEANER STORY 
        case "PICK_BOUNTY":  //consider making this a button   
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
            ...state,
            bounty : {
                ...state.bounty,
                picture : {
                    ...picture,
                    after_pic_url : state.bounty.picture.after_pic_url
                },
                isCleaned : !state.bounty.isCleaned
            } 
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

export default reducer