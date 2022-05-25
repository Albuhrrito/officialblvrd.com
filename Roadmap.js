<h2>ROADMAP</h2>
<div class="contain">
<!-- Trigger/Open The Modal -->
  <button id="button1" class="openmodal myBtn">
    <h4>01</h4>
    INITIAL LAUNCH</button>

  <!-- The Modal -->
  <div id="myModal" class="modal myModal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3 class="launch">INITIAL LAUNCH</h3>
      <p>OUR PRIMARY GOAL IS TO LAUNCH OUR BLVRD OF BAGS COLLECTION OF 108 LUXURIOUS, HAND-DRAWN NET BAGS. WITH THE REMARKABLY LOW CIRCULATION, WE ESTIMATE THE PROJECTED VALUE OF EACH BAG TO INCREASE SIGNIFICANTLY.</p>
    </div>
  </div>
  <button id="button2" class="openmodal myBtn">
    <h4>02</h4>
    DEVELOPMENT</button>

  <!-- The Modal -->
  <div id="myModal" class="modal myModal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3 class="dev">DEVELOPMENT</h3>
      <p>WE SHIFT OUR AIM TOWARDS DEVELOPING VIRTUAL METAVERSE PRODUCTS. FOR EXAMPLE, WE WANT ANYONE WHO PURCHASED ONE OF OUR NET BAGS TO BE ABLE TO WEAR AND SHOW IT OFF IN THE METAVERSE. WE MAY ALSO LAUNCH NEW COLLECTIONS.</p>
    </div>
  </div>
<button id="button3" class="openmodal myBtn">
<h4>03</h4>
METAVERSE</button>

<!-- The Modal -->
<div id="myModal" class="modal myModal">

<!-- Modal content -->
<div class="modal-content">
  <span class="close">&times;</span>
  <h3 class="meta">METAVERSE</h3>
  <p>ONCE THE METAVERSE LAUNCHES, OUR GOAL IS TO PURCHASE DIGITAL LAND TO BUILD A LUXURY STORE. THIS STORE WILL FEATURE THE VIRTUAL PRODUCTS WE DEVELOPED. WE AIM TO ALLOW ANYONE WHO OWNS OUR NFTS TO REDEEM A VIRTUAL PRODUCT.</p>
</div>
</div>
<button id="button4" class="openmodal myBtn">
  <h4>04</h4>
  EXPANSION</button>

<!-- The Modal -->
<div id="myModal" class="modal myModal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <h3 class="exp">EXPANSION</h3>
    <p>ONCE THE METAVERSE LAUNCHES, OUR GOAL IS TO PURCHASE DIGITAL LAND TO BUILD A LUXURY STORE. THIS STORE WILL FEATURE THE VIRTUAL PRODUCTS WE DEVELOPED. WE AIM TO ALLOW ANYONE WHO OWNS OUR NFTS TO REDEEM A VIRTUAL PRODUCT.</p>
  </div>
</div>
</div>

<script>

// Get the modal
var modals = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btns = document.getElementsByClassName("openmodal");
var spans=document.getElementsByClassName("close");
for(let i=0;i<btns.length;i++){
 btns[i].onclick = function() {
    modals[i].style.display = "block";
 }
}
for(let i=0;i<spans.length;i++){
  spans[i].onclick = function() {
     modals[i].style.display = "none";
  }
}
</script>