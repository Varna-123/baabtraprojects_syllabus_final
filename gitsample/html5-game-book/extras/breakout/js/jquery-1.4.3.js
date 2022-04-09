<!doctype html>
<html>
    <head>
        <title>Breakout game Level creation tool</title>
        <script type="text/javascript" src="js/jquery-1.4.3.js"></script>
        
        <script type="text/javascript" src="js/init.js"></script>
    </head>
    <body>
      Game Board
       <p style="float:right;">
            Legend<br/>
            Undefined       = clear<br/>
            Single Contact  = light blue<br/>
            Double Contact  = medium blue<br/>
            Triple Contact  = dark blue<br/>
            Stone           = black<br/>
            Speed up        = green<br/>
            Slowdown        = red<br/>
          </p>
      <table id="board" border="1">
        <tr><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td></tr>
        <tr><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td></tr>
        <tr><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td></tr>
        <tr><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td></tr>
        <tr><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td></tr>
        <tr><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td><td width="40" height="40"></td></tr>
      </table>
      <button id="darker">Make All Darker</button>
      <button id="makeMap">Make Map</button>
      <textarea id="map" ></textarea>
      <p id="para"></p>
      
    </body>
</html>