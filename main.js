$(document).ready(function() {
        // Replace the following values by your ApplicationID and ApiKey.
        var client = algoliasearch('6MA4JGAQVX', 'b3d3a495269bc50f89e408cfc4a749ff');
        // Replace the following value by the name of the index you want to query.
        var index = client.initIndex('best_buy');
        
        var template = Hogan.compile('tr class="main-table">' + 
          '  <td align="right"><picture class="pic-space"><img src="{{{image}}}" /></picture></td> ' + 
          '  <td class="text-left big-name">{{{ _highlightResult.name.value }}}</td>' + 
          '<td class="text-left side-price">${{{ price }}}</td>' + '</tr>');
    
        $('#algolia-search').autocomplete(null, {
          source: $.fn.autocomplete.sources.hits(index, {hitsPerPage: 8}),
          displayKey: 'name',
          templates: {
            suggestion: function(hit) {
              return template.render(hit);
            }
          }
        });
      });


