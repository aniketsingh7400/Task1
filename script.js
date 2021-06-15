var content1 = `<div class="form-heading">
<p>Technical Evaluation Form</p>
</div>
<div class="form">
<div class="row">
<div class="part1"><span>Section 1 </span>Classes / Objects / Constructors <span id="mandatory">*</span></div>
<div class="part2">
    <input type="radio" id="1" name="marks1"><label for="1">1</label>
    <input type="radio" id="2" name="marks1"><label for="2">2</label>
    <input type="radio" id="3" name="marks1"><label for="3">3</label>
    <input type="radio" id="4" name="marks1"><label for="4">4</label>
    <input type="radio" id="5" name="marks1"><label for="5">5</label>
</div>
<div class="part3">
    <label for="remark1">Remarks:<span id="mandatory">*</span></label>
    <textarea></textarea>
</div>
</div>
<div class="row">
<div class="part1"><span>Section 2 </span>Java <span id="mandatory">*</span></div>
<div class="part2">
    <input type="radio" id="6" name="marks2"><label for="6">1</label>
    <input type="radio" id="7" name="marks2"><label for="7">2</label>
    <input type="radio" id="8" name="marks2"><label for="8">3</label>
    <input type="radio" id="9" name="marks2"><label for="9">4</label>
    <input type="radio" id="10" name="marks2"><label for="10">5</label>
</div>
<div class="part3">
    <label for="remark2">Remarks:<span id="mandatory">*</span></label>
    <textarea></textarea>
</div>
</div>
<div class="row">
<div class="part1"><span>Section 3 </span>Datastructures & Algorithms <span id="mandatory">*</span></div>
<div class="part2">
    <input type="radio" id="11" name="marks3"><label for="11">1</label>
    <input type="radio" id="12" name="marks3"><label for="12">2</label>
    <input type="radio" id="13" name="marks3"><label for="13">3</label>
    <input type="radio" id="14" name="marks3"><label for="14">4</label>
    <input type="radio" id="15" name="marks3"><label for="15">5</label>
</div>
<div class="part3">
    <label for="remark3">Remarks:<span id="mandatory">*</span></label>
    <textarea></textarea>
</div>
</div>
</div>`;

let interview = document.getElementById("icon-link-1");
let display = document.getElementById("display");
interview.addEventListener('click', function(e){
    e.preventDefault();
    display.innerHTML = "";
    display.innerHTML = content1;
})

var content2 = `<div class="form-heading">
<p>Test - 1</p>
</div>`;

let test1 = document.getElementById("icon-link-2");
test1.addEventListener('click', function(e){
    e.preventDefault();
    display.innerHTML = "";
    display.innerHTML = content2;
})

var content3 = `<div class="form-heading">
<p>Test - 2</p>
</div>`;

let test2 = document.getElementById("icon-link-3");
test2.addEventListener('click', function(e){
    e.preventDefault();
    display.innerHTML = "";
    display.innerHTML = content3;
})

var content4 = `<div class="form-heading">
<p>Details</p>
</div>`;

let details = document.getElementById("icon-link-4");
details.addEventListener('click', function(e){
    e.preventDefault();
    display.innerHTML = "";
    display.innerHTML = content4;
})

var content5 = `<div class="form-heading">
<p>Meeting</p>
</div>`;

let meeting = document.getElementById("icon-link-5");
meeting.addEventListener('click', function(e){
    e.preventDefault();
    display.innerHTML = "";
    display.innerHTML = content5;
})

var content6 = `<div class="form-heading">
<p>Candidate</p>
</div>`;

let snapshot = document.getElementById("icon-link-6");
snapshot.addEventListener('click', function(e){
    e.preventDefault();
    display.innerHTML = "";
    display.innerHTML = content6;
})

let iconsLinkList = document.querySelectorAll(".icon-link");
for (let node of iconsLinkList){
    node.addEventListener("click", function(e){
        e.preventDefault();
        handleActive(e);
        if (e.target.className == "icon-link"){
            e.target.classList.add("active");
        }
        else if(e.target.parentNode.className == "icon-link"){
            e.target.parentNode.classList.add("active");
        }
        else if(e.target.parentNode.parentNode.className == "icon-link"){
            e.target.parentNode.parentNode.classList.add("active");
        }
    })
}
let handleActive = e => {
    for (let node of iconsLinkList){
        node.className = "icon-link";
    }
}