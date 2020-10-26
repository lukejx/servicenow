/*------------ Begins -------------*/

/* 
* Module: Script Include
*/

// Script include in this Example: (checkAdditionalCommentsCase)

var checkAdditionalCommentsCase = Class.create();
checkAdditionalCommentsCase.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
  getComment: function() {
    var comments = this.getParameter('sysparm_comments');
    var regID = this.getParameter('sysparm_regid');
    var json = new JSON();
    var regComment = new GlideRecord('yourTable'); // Set your table here
    if (regComment.get(regID)) {
      var last_comment = regComment.comments.getJournalEntry(-1).split("\\n")[1];
      if (last_comment == comments) {
        var results = {
          "same_comment": "true"
        };
        return json.encode(results);
      }
    }
  },
  type: 'checkAdditionalCommentsCase'
});

/*------------ END -------------*/

/*------------ Begins -------------*/

/* 
* Module: Client Script
*/

// Call your Script Include (checkAdditionalCommentsCase) via Client Script using GlideAjax api to validate the inserted comment and avoid duplicate comment.

var ga = new GlideAjax(‘global.checkAdditionalCommentsCase’);
ga.addParam(‘sysparm_name’, ‘getComment’);
ga.addParam(‘sysparm_comments’, g_form.getValue(‘comments’));
ga.addParam(‘sysparm_regid’, g_form.getUniqueValue());
ga.getXML(callBack);
}

function callBack(response) {
  var answer = response.responseXML.documentElement.getAttribute(“answer”);
  answer = JSON.parse(answer);

  if (answer.same_comment == ‘true’) {
    g_form.clearValue(‘comments’);
  }

  /*------------ END -------------*/