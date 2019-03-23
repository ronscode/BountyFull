module.exports = (body) => {
    let { poster, bountyAmount, location, pictures } = body
    let errors = [];
    if (!poster){errors.push({msg:'no user provided'})}
    if (!bountyAmount){errors.push({msg:'no bounty amount provided'})}
    if (!location){errors.push({msg:'no location provided'})}
    if (!pictures){errors.push({msg:'no picture provided'})}
    if(errors.length > 0){return errors}

    let defaultValues = {
        claimer: '',
        isComplete: false,
        isVerified: false,
        isStarted: false,
        isPaid: false,
        timeStarted: '',
        timeEnded: ''
    };
    let newBounty = {
        ...defaultValues,
        poster,
        bountyAmount,
        location,
        pictures: {
            post: pictures.post,
            start: '',
            end: ''
        },
    }
    return newBounty
}