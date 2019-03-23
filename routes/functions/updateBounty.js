module.exports = (bounty, body) => {
    let { picUrl, claimer } = body;
    let { isStarted, isCleaned, isVerified, isPaid} = bounty
    if(!isStarted){
        return {
            ...bounty,
            claimer,
            isStarted: true,
            pictures: {
                ...bounty.pictures,
                start: picUrl
            }
        }
    } else if (!isCleaned){
        return {
            ...bounty,
            isCleaned: true,
            pictures: {
                ...bounty.pictures,
                end: picUrl
            }
        }
    } else if(!isVerified){
        return {
            ...bounty,
            isVerified: true
        }
    } else if(!isPaid){
        return {
            ...bounty,
            isPaid: true
        }
    } else if(isStarted && isCleaned && isVerified && isPaid){
        return {
            ...bounty,
            isComplete: true
        }
    }
    return {errors: [{ msg:'Something happened, Bounty not updated!' }]}
}