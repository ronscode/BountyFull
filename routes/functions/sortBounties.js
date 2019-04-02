module.exports = bounty => {
    console.log('newPing')
    return bounty.sort((a, b) => { 
        return a.datePosted - b.datePosted
    })
}