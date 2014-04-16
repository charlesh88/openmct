function switchDiv(div_id){
        var style_sheet = getStyleObject(div_id);
        if (style_sheet){
        hideAll();
        changeObjectVisibility(div_id, "visible");
        }else
        {
        alert("sorry, this only works in browsers that do Dynamic HTML");
        }
}

function getStyleObject(objectId) {
  // checkW3C DOM, then MSIE 4, then NN 4.
  //
  if(document.getElementById && document.getElementById(objectId)) {
        return document.getElementById(objectId).style;
   }
   else if (document.all && document.all(objectId)) {
        return document.all(objectId).style;
   }
   else if (document.layers && document.layers[objectId]) {
        return document.layers[objectId];
   } else {
        return false;
   }
}

function changeObjectVisibility(objectId, newVisibility) {
    // first get the object's stylesheet
    var styleObject = getStyleObject(objectId);

    // then if we find a stylesheet, set its visibility
    // as requested
    //
    if (styleObject) {
        styleObject.visibility = newVisibility;
        return true;
    } else {
        return false;
    }
}


function hideAll()
{
   changeObjectVisibility("sbir","hidden");
   changeObjectVisibility("nasa","hidden");
   changeObjectVisibility("nasa_contractor","hidden");
   changeObjectVisibility("other_agency","hidden");
   changeObjectVisibility("industry","hidden");
}
