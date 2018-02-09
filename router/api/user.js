var UserCtrl = require('../../controllers/UserCtrl');

module.exports = function(router){
	router.route('/user')
		.get(function(req, res){
				if (req.user){
						res.json({
								user: req.user
						});
				} else {
						res.json({
								err: 'Client has no authenticated session'
						});
				}
		});

	router.put('/user', function(req, res){
		var data = req.body || {};

		UserCtrl.update({
			userId: req.user._id,
			data: {
				firstname: data.firstname,
				lastname: data.lastname,
				picture: data.picture,
				birthdate: data.birthdate,
				serviceInterests: data.serviceInterests,
				gender: data.gender,
				race: data.race,
				groupIdentification: data.groupIdentification,
				computerAccess: data.computerAccess,
				preferredTimes: data.preferredTimes,
				highschool: data.highschool,
				currentGrade: data.currentGrade,
				expectedGraduation: data.expectedGraduation,
				difficultAcademicSubject: data.difficultAcademicSubject,
				difficultCollegeProcess: data.difficultCollegeProcess,
				highestLevelEducation: data.highestLevelEducation,
				hasGuidanceCounselor: data.hasGuidanceCounselor,
				gpa: data.gpa,
				collegeApplicationsText: data.collegeApplicationsText,
				commonCollegeDocs: data.commonCollegeDocs,
				academicInterestsText: data.academicInterestsText,
				testScoresText: data.testScoresText,
				advancedCoursesText: data.advancedCoursesText,
				extracurricularActivitesText: data.extracurricularActivitesText,
				nickname: data.nickname,
				referred: data.referred,
				computerAccessLocation: data.computerAccessLocation,
				homeworkTime: data.homeworkTime,
				heardFrom: data.heardFrom,
				phone: data.phone,
				favoriteAcademicSubject: data.favoriteAcademicSubject,
				college: data.college
			}
		}, function(err, user){
			if (err){
				res.json({err: err});
			} else {
				res.json({
					user: user
				});
			}
		});
	});
};
