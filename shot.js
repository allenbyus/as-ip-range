var ip='';
//https://bgp.he.net/AS16509#_prefixes
$('tr a').each(function(){ip+=$(this).text()+"\n"})
