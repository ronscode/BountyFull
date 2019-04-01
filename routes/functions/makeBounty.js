module.exports = body => {
  let { poster, location, picture, bountyAmount, bountyTitle, bountyNotes } = body;
  let errors = [];
  if (!poster) {
    errors.push({ msg: "no user provided" });
  }
  if (!bountyAmount) {
    errors.push({ msg: "no bounty amount provided" });
  }
  if (!bountyNotes) {
    errors.push({ msg: "no bounty amount provided" });
  }
  if (!bountyTitle) {
    errors.push({ msg: "no bounty amount provided" });
  }
  if (!location) {
    errors.push({ msg: "no location provided" });
  }
  if (!picture) {
    errors.push({ msg: "no picture provided" });
  }
  if (errors.length > 0) {
    console.log(errors);
    return errors;
  }

  let defaultValues = {
    claimer: "",
    isStarted: false,
    isCleaned: false,
    isVerified: false,
    isPaid: false,
    isComplete: false,
    timeStarted: "",
    timeEnded: ""
  };
  let newBounty = {
    ...defaultValues,
    poster,
    location,
    bountyNotes,
    bountyTitle,
    bountyAmount,
    pictures: {
      post: picture,
      start: "",
      end: ""
    }
  };
  return newBounty;
};
