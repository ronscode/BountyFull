const initialState = {
    bounties: {
            "id": "",
            "claimer": " ",
            "isStarted": false,
            "bountyTitle": " ",
            "bountyNotesPoster": " ",
            "isCleaned": false,
            "isVerified": false,
            "isPaid": false,
            "isComplete": false,
            "timeStarted": "",
            "timeEnded": "",
            "bountyPoster": " ",
            "bountyAmount": 0,
            "location": " ",
            "pictures": {
                "post": "assets/images/demo/before_1.jpg",
                "start": "blank",
                "end": "blank"
            },
    },
    bounty : [],
    potentialBounty: '',
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
        currentPostedBounty: '',
        signedIn : false,
        inProgress: false           //Once the user is starts a bounty inProgress is true.
    }
}


const reducer = (state = initialState, actions) =>{

    //destructured payloads
    let { type, bounties, user, picture } = actions

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
            bounty : bounties
            
            
        }
        case "PICTURE": 
        return{
            ...state,
            bounty : {
                ...state.bounty,
                pictures : picture
            }

        }
        
        //CLEANER STORY 
        case "PICK_BOUNTY":  //consider making this a button   
        return {
            potentialBounty: bounties
        };
        case "CHECKOUT_BOUNTY":
        return {
            ...state,
            potentialBounty: bounties
        };
        case "START_BOUNTY": 
        return{
            ...state,
            start : state.bounty.pictures.start,
            isStarted : !state.bounty.isStarted
        }
        case "COMPLETE_BOUNTY": 
        return {
            ...state,
            bounty : {
                ...state.bounty,
                picture : {
                    ...picture,
                    end : state.bounty.pictures.end
                },
                isCleaned : !state.bounty.isCleaned
            } 
        }

        //POSTER
        case "POST_BOUNTY": 
        return {
            ...state,
            user: {
                ...user,
                currentPostedBounty: bounties
            }
        };
        case "VERIFY_BOUNTY": 
        return {
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