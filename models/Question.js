var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
  questionText: String,
  possibleAnswers: [{txt: String, val: String}],
  correctAnswer: String,
  category: String,
  subcategory: String,
  image: String
});

// Given a question record, strip out sensitive data for public consumption
questionSchema.methods.parseQuestion = function(){
  return {
    _id: this._id,
    questionText: this.questionText,
    possibleAnswers: this.possibleAnswers,
    image: this.image
  };
};

questionSchema.statics.getSubcategories = function(category){
  var categoryToSubcategoryMap = {
    algebra: ['linear equations', 'rational exponents and radicals', 'application of linear equations', 'two variable equations', 'rational expressions', 'complex numbers'],
    geometry: ['congruence and similarity', 'vertices', 'angles', 'circles', 'triangles', 'rectangles'],
    trigonometry: ['angles', 'triangles', 'right triangles', 'quadrants', 'radians', 'unit circle', 'inequalities'],
    esl: ['Reading', 'Writing', 'Writing - vocabulary', 'Reading & Writing', 'Speaking - conversational'],
    precalculus: ['rectangular coordinates', 'linear inequalities', 'functions', 'rational exponents', 'quadratic functions', 'logarithms and exponents'],
    calculus: ['antiderivatives', 'derivatives', 'limits', 'critical numbers', 'functions'],
    planning: ['exam','type','LOR','basic'],
    essays: ['basic','commonapp','answer','dhistory','optional','supplemental'],
    application: ['timeline','resume','schools','fees','FinAid','LOR','basic'],
    biology: ['biochemistry', 'cell', 'celldivision', 'cellrespiration', 'photosynthesis', 'classicalgenetics', 'moleculargenetics', 'plants', 'animalphysiology', 'humanphysiology', 'reproduction', 'immunesystem', 'behavior', 'evolution', 'taxonomy', 'ecology'],
    chemistry: ['structure of matter', 'States of matter', 'Reaction types', 'Stoichiometry', 'Equilibrium and reaction rates', 'Thermochemistry', 'Descriptive chemistry', 'Laboratory']
  };
  var subcategories = categoryToSubcategoryMap[category];
  return subcategories;
}

module.exports = mongoose.model('Question', questionSchema, 'question');
