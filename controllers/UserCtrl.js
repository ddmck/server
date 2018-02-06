var User = require('../models/User');

module.exports = {
  get: function(options, callback){
    var userId = options.userId;
    User.findById(userId, function(err, user){
      if (err || !user){
        callback('Could not get user');
      } else {
        user.getProfile(callback);
      }
    });
  },
  update: function(options, callback){
    var userId = options.userId;

    var data = options.data || {},
        update = {},
        hasUpdate = false;

    // Define and iterate through keys to add to update object

    [
      'firstname', 'lastname', 'picture', 'birthdate', 'serviceInterests', 'gender', 'race',
      'groupIdentification', 'referred', 'computerAccess', 'computerAccessLocation', 'homeworkTime', 'preferredTimes', 'highschool', 'currentGrade',
      'expectedGraduation', 'difficultAcademicSubject', 'difficultCollegeProcess', 'highestLevelEducation',
      'hasGuidanceCounselor', 'heardFrom', 'gpa', 'collegeApplicationsText', 'commonCollegeDocs', 'academicInterestsText',
      'testScoresText', 'advancedCoursesText', 'extracurricularActivitesText'
    ].forEach(function(key){
      if (data[key]){
        update[key] = data[key];
        hasUpdate = true;
      }
    });

    if (!hasUpdate){
      return callback('No fields defined to update');
    }

    User.findByIdAndUpdate(userId, update, { new: true }, function(err, user){
      if (err){
        return callback(err);
      } else {
        user.getProfile(callback);
      }
    });
  }
};
