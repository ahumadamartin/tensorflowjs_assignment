let net;

async function app(){
	myconsole = document.getElementById("console");
	myconsole.innerHTML = 'Loading mobilenet..';
	
	//load the model
	net = await mobilenet.load();
	myconsole.innerHTML ='Successfully loaded model';
	
	//make a prediction through the model on our image.
	const imgEl = document.getElementById('img');
	const result = await net.classify(imgEl);
	//show the 
	myconsole.innerHTML = 	"Result: " + result[0]['className'];
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#img').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]);
  }
}

$("#imagefile").change(function() {
	$("#console").html("");
  readURL(this);

});

