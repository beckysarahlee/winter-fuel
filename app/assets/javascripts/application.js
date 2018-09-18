/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})



// ==========================================================================
// Tabs
// ==========================================================================

// Declare some variables

var $container = '.tabs'
var $tablist = '.tabs-list'
var $tabpanel = '.tabs-panel'

// The setup

$($container + ' ' + $tablist).attr('role', 'tablist')

$($container + ' [role="tablist"] li').attr('role', 'presentation')

$('[role="tablist"] a').attr({
  'aria-selected': 'false',
  role: 'tab',
  tabindex: '-1'
})

// Make each aria-controls correspond id of targeted section (re href)

$('[role="tablist"] a').each(function () {
  $(this).attr(
    'aria-controls', $(this).attr('href').substring(1)
  )
})

// Make the first tab selected by default and allow it focus

$('[role="tablist"] li:first-child a').attr({
  'aria-selected': 'true',
  tabindex: '0'
})

// Make each section focusable and give it the tabpanel role

$($container + ' ' + $tabpanel).attr({
  role: 'tabpanel'
})

// Make first child of each panel focusable programmatically

$($container + ' ' + $tabpanel + ' > *:first-child').attr({
  tabindex: '0'
})

// Make all but the first section hidden (ARIA state and display CSS)

$('[role="tabpanel"]:not(:first-of-type)').attr({
  'aria-hidden': 'true'
})

// Change focus between tabs with arrow keys

$('[role="tab"]').on('keydown', function (e) {
  // Define current, previous and next (possible) tabs

  var $original = $(this)
  var $prev = $(this).parents('li').prev().children('[role="tab"]')
  var $next = $(this).parents('li').next().children('[role="tab"]')
  var $target

  // Find the direction (prev or next)

  switch (e.keyCode) {
    case 37:
      $target = $prev
      break
    case 39:
      $target = $next
      break
    default:
      $target = false
      break
  }

  if ($target.length > 0) {
    $original.attr({
      tabindex: '-1',
      'aria-selected': false
    })

    $target.attr({
      tabindex: '0',
      'aria-selected': true
    }).focus()
  }

  // Hide panels

  $($container + ' [role="tabpanel"]')
    .attr('aria-hidden', 'true')

  // Show panel which corresponds to target

  $('#' + $(document.activeElement).attr('href').substring(1))
    .attr('aria-hidden', false)
})

// Handle click on tab to show + focus tabpanel

$('[role="tab"]').on('click', function (e) {
  e.preventDefault()

  // Remove focusability [sic] and aria-selected

  $('[role="tab"]').attr({
    tabindex: '-1',
    'aria-selected': false
  })

  // Replace above on clicked tab

  $(this).attr({
    'aria-selected': true,
    tabindex: '0'
  })

  // Hide panels

  $($container + ' [role="tabpanel"]').attr('aria-hidden', 'true')

  // Show corresponding panel

  $('#' + $(this).attr('href').substring(1))
    .attr('aria-hidden', false)
})

//back link

function goBack() {
    window.history.back();
}

function change_link()
{
  if (document.getElementById("uk").checked)
  {
    document.getElementById("buttonChange").innerHTML = "<a href = 'uk'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
  else if (document.getElementById("international").checked)
  {
    document.getElementById("buttonChange").innerHTML = "<a href = 'international'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
 

}

function change_link2()
{
  if (document.getElementById("uk").checked)
  {
    document.getElementById("buttonChange2").innerHTML = "<a href = 'uk_address'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
  else if (document.getElementById("international").checked)
  {
    document.getElementById("buttonChange2").innerHTML = "<a href = 'international_address'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
 

}

function change_link3()
{
  if (document.getElementById("john").checked)
  {
    document.getElementById("buttonChange3").innerHTML = "<a href = 'checkanswers_topup'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
  else if (document.getElementById("ermintrude").checked)
  {
    document.getElementById("buttonChange3").innerHTML = "<a href = 'address_type2'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
 

}


function change_link4()
{
  if (document.getElementById("yes").checked)
  {
    document.getElementById("buttonChange4").innerHTML = "<a href = 'address_post'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
  else if (document.getElementById("no").checked)
  {
    document.getElementById("buttonChange4").innerHTML = "<a href = '#'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
 

}

function change_link5()
{
  if (document.getElementById("uk").checked)
  {
    document.getElementById("buttonChange5").innerHTML = "<a href = 'uk_address2'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
  else if (document.getElementById("international").checked)
  {
    document.getElementById("buttonChange5").innerHTML = "<a href = '#'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
 

}

function change_link6()
{
  if (document.getElementById("yes").checked)
  {
    document.getElementById("buttonChange6").innerHTML = "<a href = 'circumstance'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
  else if (document.getElementById("no").checked)
  {
    document.getElementById("buttonChange6").innerHTML = "<a href = '#'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
 

}

function change_link7()
{
  if (document.getElementById("yes").checked)
  {
    document.getElementById("buttonChange7").innerHTML = "<a href = 'circumstance'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
  else if (document.getElementById("no").checked)
  {
    document.getElementById("buttonChange7").innerHTML = "<a href = 'address_im'><input type='submit' value='Continue' class='govuk-button'></a>";
  }
 

}


function changeLink() {
   var value = document.getElementById("input").value;
   var valueLower = value.toLowerCase(); 
   if (valueLower == "gb123456c" ) {
       document.getElementById("link").href = "gb123456c";
   }

   else if (valueLower == "zz654321c" ) {
       document.getElementById("link").href = "zz654321c";
   }

   else if (valueLower == "gb654321c" ) {
       document.getElementById("link").href = "gb654321c";
   }

 //  else if (valueLower == "zz123456c" ) {
 //      document.getElementById("link").href = "zz123456c";
// }

 
}

document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("link").click();
    }
});

//postcode


function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}



