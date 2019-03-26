module.exports = (bounty, body) => {
    let { isStarted, isCleaned, isVerified, isPaid} = bounty
    if(!isStarted){
        return {
            ...bounty,
            claimer: body.claimer,
            timeStarted: Date.now(),
            isStarted: true,
            pictures: {
                ...bounty.pictures,
                start: body.picUrl
            }
        }
    } else if (!isCleaned){
        return {
            ...bounty,
            isCleaned: true,
            timeEnded: Date.now(),
            pictures: {
                ...bounty.pictures,
                end: body.picUrl
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