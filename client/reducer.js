const initialState = {
    bounties: {
        _id: '',
        claimer: ' ',
        isStarted: false,
        bountyTitle: ' ',
        bountyNotes: ' ',
        isCleaned: false,
        isVerified: false,
        isPaid: false,
        isComplete: false,
        timeStarted: '',
        timeEnded: '',
        poster: ' ',
        bountyAmount: 0,
        location: ' ',
        pictures: {
            post: null,
            start: null,
            end: null
        }
    },
    bounty: [],
    user: {
        user_id: 0,
        firstName: '',
        lastName: '',
        email: '',
        user_bio: '',
        total_earnings: '',
        total_time: '',
        profile_pic: '',
        complete: [],
        posted: [],
        currentPostedBounty: '',
        signedIn: false,
        inProgress: false //Once the user is starts a bounty inProgress is true.
    }
};


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
            bounties: bounties
        };
        case "START_BOUNTY": 
        return{
            ...state,
            bounties: {
                ...state.bounties,
                isStarted: true,
                pictures: {
                    ...state.bounties.pictures,
                    start: picture
                }
            }
        }
        case "CLEAN_BOUNTY": 
        return {
            ...state,
            bounties : {
                ...state.bounties,
                isCleaned : true,
                pictures : {
                    ...state.bounties.pictures,
                    end : picture
                }
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
            bounties: {
                ...state.bounties,
                isVerified: true,
                isPaid: true
            }
        }

        default :
         return{
             ...state
         }
    }

}

export default reducer