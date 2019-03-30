module.exports = body => {
    console.log(body)
    let { givenName, familyName, email, photoUrl } = body;
    let defaultValues = {
        bio: '',
        profilePic: '',
        totalEarnings: 0,
        totalHours: 0,
        inProgress: false,
        completed: [],
        posted: []
    };

    return {
        ...defaultValues,
        firstName: givenName,
        lastName: familyName,
        profilePic: photoUrl,
        email,
    }
};