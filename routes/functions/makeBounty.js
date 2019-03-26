module.exports = (body) => {
    let { poster, amount, location, picture } = body
    let errors = [];
    if (!poster){errors.push({msg:'no user provided'})}
    if (!bountyAmount){errors.push({msg:'no bounty amount provided'})}
    if (!location){errors.push({msg:'no location provided'})}
    if (!pictures){errors.push({msg:'no picture provided'})}
    if(errors.length > 0){return errors}

    let defaultValues = {
        claimer: '',
        isStarted: false,
        isCleaned: false,
        isVerified: false,
        isPaid: false,
        isComplete: false,
        timeStarted: '',
        timeEnded: ''
    };
    let newBounty = {
        ...defaultValues,
        poster,
        location,
        bountyAmount : amount,
        pictures: {
            post: picture,
            start: '',
            end: ''
        },
    }
    return newBounty
}