/*! For license information please see 8084.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksterling_ts=self.webpackChunksterling_ts||[]).push([[8084],{98084:(e,o,n)=>{n.r(o),n.d(o,{conf:()=>t,language:()=>s});var t={comments:{lineComment:"//",blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"},{open:"'",close:"'"}]},s={defaultToken:"",tokenPostfix:".pascaligo",ignoreCase:!0,brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],keywords:["begin","block","case","const","else","end","fail","for","from","function","if","is","nil","of","remove","return","skip","then","type","var","while","with","option","None","transaction"],typeKeywords:["bool","int","list","map","nat","record","string","unit","address","map","mtz","xtz"],operators:["=",">","<","<=",">=","<>",":",":=","and","mod","or","+","-","*","/","@","&","^","%"],symbols:/[=><:@\^&|+\-*\/\^%]+/,tokenizer:{root:[[/[a-zA-Z_][\w]*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"delimiter","@default":""}}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\$[0-9a-fA-F]{1,16}/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/'/,"string","@string"],[/'[^\\']'/,"string"],[/'/,"string.invalid"],[/\#\d+/,"string"]],comment:[[/[^\(\*]+/,"comment"],[/\*\)/,"comment","@pop"],[/\(\*/,"comment"]],string:[[/[^\\']+/,"string"],[/\\./,"string.escape.invalid"],[/'/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,"white"],[/\(\*/,"comment","@comment"],[/\/\/.*$/,"comment"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODA4NC5idW5kbGUuanMiLCJtYXBwaW5ncyI6IjtxSkFRQSxJQUFJQSxFQUFPLENBQ1RDLFNBQVUsQ0FDUkMsWUFBYSxLQUNiQyxhQUFjLENBQUMsS0FBTSxPQUV2QkMsU0FBVSxDQUNSLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxNQUVSQyxpQkFBa0IsQ0FDaEIsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxNQUV0QkMsaUJBQWtCLENBQ2hCLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sT0FHcEJFLEVBQVcsQ0FDYkMsYUFBYyxHQUNkQyxhQUFjLGFBQ2RDLFlBQVksRUFDWlIsU0FBVSxDQUNSLENBQUVFLEtBQU0sSUFBS0MsTUFBTyxJQUFLTSxNQUFPLG1CQUNoQyxDQUFFUCxLQUFNLElBQUtDLE1BQU8sSUFBS00sTUFBTyxvQkFDaEMsQ0FBRVAsS0FBTSxJQUFLQyxNQUFPLElBQUtNLE1BQU8seUJBQ2hDLENBQUVQLEtBQU0sSUFBS0MsTUFBTyxJQUFLTSxNQUFPLG9CQUVsQ0MsU0FBVSxDQUNSLFFBQ0EsUUFDQSxPQUNBLFFBQ0EsT0FDQSxNQUNBLE9BQ0EsTUFDQSxPQUNBLFdBQ0EsS0FDQSxLQUNBLE1BQ0EsS0FDQSxTQUNBLFNBQ0EsT0FDQSxPQUNBLE9BQ0EsTUFDQSxRQUNBLE9BQ0EsU0FDQSxPQUNBLGVBRUZDLGFBQWMsQ0FDWixPQUNBLE1BQ0EsT0FDQSxNQUNBLE1BQ0EsU0FDQSxTQUNBLE9BQ0EsVUFDQSxNQUNBLE1BQ0EsT0FFRkMsVUFBVyxDQUNULElBQ0EsSUFDQSxJQUNBLEtBQ0EsS0FDQSxLQUNBLElBQ0EsS0FDQSxNQUNBLE1BQ0EsS0FDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLElBQ0EsSUFDQSxJQUNBLEtBRUZDLFFBQVMsd0JBQ1RDLFVBQVcsQ0FDVEMsS0FBTSxDQUNKLENBQ0UsaUJBQ0EsQ0FDRUMsTUFBTyxDQUNMLFlBQWEsQ0FBRVAsTUFBTyxjQUN0QixXQUFZLGdCQUlsQixDQUFFUSxRQUFTLGVBQ1gsQ0FBQyxhQUFjLGFBQ2YsQ0FBQyxtQkFBb0IsYUFDckIsQ0FDRSxXQUNBLENBQ0VELE1BQU8sQ0FDTCxhQUFjLFlBQ2QsV0FBWSxNQUlsQixDQUFDLDJCQUE0QixnQkFDN0IsQ0FBQyxzQkFBdUIsY0FDeEIsQ0FBQyxNQUFPLFVBQ1IsQ0FBQyxRQUFTLGFBQ1YsQ0FBQyxrQkFBbUIsa0JBQ3BCLENBQUMsSUFBSyxTQUFVLFdBQ2hCLENBQUMsV0FBWSxVQUNiLENBQUMsSUFBSyxrQkFDTixDQUFDLFFBQVMsV0FFWkUsUUFBUyxDQUNQLENBQUMsV0FBWSxXQUNiLENBQUMsT0FBUSxVQUFXLFFBQ3BCLENBQUMsT0FBUSxZQUVYQyxPQUFRLENBQ04sQ0FBQyxVQUFXLFVBQ1osQ0FBQyxNQUFPLHlCQUNSLENBQUMsSUFBSyxDQUFFVixNQUFPLGVBQWdCVyxRQUFTLFNBQVVDLEtBQU0sVUFFMURDLFdBQVksQ0FDVixDQUFDLGFBQWMsU0FDZixDQUFDLE9BQVEsVUFBVyxZQUNwQixDQUFDLFVBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGVybGluZy10cy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvcGFzY2FsaWdvL3Bhc2NhbGlnby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBWZXJzaW9uOiAwLjMxLjEoMzM3NTg3ODU5YjFjMTcxMzE0YjQwNTAzMTcxMTg4YjZjZWE2YTMyYSlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9tb25hY28tZWRpdG9yL2Jsb2IvbWFpbi9MSUNFTlNFLnR4dFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIHNyYy9iYXNpYy1sYW5ndWFnZXMvcGFzY2FsaWdvL3Bhc2NhbGlnby50c1xudmFyIGNvbmYgPSB7XG4gIGNvbW1lbnRzOiB7XG4gICAgbGluZUNvbW1lbnQ6IFwiLy9cIixcbiAgICBibG9ja0NvbW1lbnQ6IFtcIigqXCIsIFwiKilcIl1cbiAgfSxcbiAgYnJhY2tldHM6IFtcbiAgICBbXCJ7XCIsIFwifVwiXSxcbiAgICBbXCJbXCIsIFwiXVwiXSxcbiAgICBbXCIoXCIsIFwiKVwiXSxcbiAgICBbXCI8XCIsIFwiPlwiXVxuICBdLFxuICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgeyBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiIH0sXG4gICAgeyBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH0sXG4gICAgeyBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiIH0sXG4gICAgeyBvcGVuOiBcIjxcIiwgY2xvc2U6IFwiPlwiIH0sXG4gICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgXSxcbiAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogXCI8XCIsIGNsb3NlOiBcIj5cIiB9LFxuICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gIF1cbn07XG52YXIgbGFuZ3VhZ2UgPSB7XG4gIGRlZmF1bHRUb2tlbjogXCJcIixcbiAgdG9rZW5Qb3N0Zml4OiBcIi5wYXNjYWxpZ29cIixcbiAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgYnJhY2tldHM6IFtcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIsIHRva2VuOiBcImRlbGltaXRlci5jdXJseVwiIH0sXG4gICAgeyBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiLCB0b2tlbjogXCJkZWxpbWl0ZXIuc3F1YXJlXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIsIHRva2VuOiBcImRlbGltaXRlci5wYXJlbnRoZXNpc1wiIH0sXG4gICAgeyBvcGVuOiBcIjxcIiwgY2xvc2U6IFwiPlwiLCB0b2tlbjogXCJkZWxpbWl0ZXIuYW5nbGVcIiB9XG4gIF0sXG4gIGtleXdvcmRzOiBbXG4gICAgXCJiZWdpblwiLFxuICAgIFwiYmxvY2tcIixcbiAgICBcImNhc2VcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJlbmRcIixcbiAgICBcImZhaWxcIixcbiAgICBcImZvclwiLFxuICAgIFwiZnJvbVwiLFxuICAgIFwiZnVuY3Rpb25cIixcbiAgICBcImlmXCIsXG4gICAgXCJpc1wiLFxuICAgIFwibmlsXCIsXG4gICAgXCJvZlwiLFxuICAgIFwicmVtb3ZlXCIsXG4gICAgXCJyZXR1cm5cIixcbiAgICBcInNraXBcIixcbiAgICBcInRoZW5cIixcbiAgICBcInR5cGVcIixcbiAgICBcInZhclwiLFxuICAgIFwid2hpbGVcIixcbiAgICBcIndpdGhcIixcbiAgICBcIm9wdGlvblwiLFxuICAgIFwiTm9uZVwiLFxuICAgIFwidHJhbnNhY3Rpb25cIlxuICBdLFxuICB0eXBlS2V5d29yZHM6IFtcbiAgICBcImJvb2xcIixcbiAgICBcImludFwiLFxuICAgIFwibGlzdFwiLFxuICAgIFwibWFwXCIsXG4gICAgXCJuYXRcIixcbiAgICBcInJlY29yZFwiLFxuICAgIFwic3RyaW5nXCIsXG4gICAgXCJ1bml0XCIsXG4gICAgXCJhZGRyZXNzXCIsXG4gICAgXCJtYXBcIixcbiAgICBcIm10elwiLFxuICAgIFwieHR6XCJcbiAgXSxcbiAgb3BlcmF0b3JzOiBbXG4gICAgXCI9XCIsXG4gICAgXCI+XCIsXG4gICAgXCI8XCIsXG4gICAgXCI8PVwiLFxuICAgIFwiPj1cIixcbiAgICBcIjw+XCIsXG4gICAgXCI6XCIsXG4gICAgXCI6PVwiLFxuICAgIFwiYW5kXCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm9yXCIsXG4gICAgXCIrXCIsXG4gICAgXCItXCIsXG4gICAgXCIqXCIsXG4gICAgXCIvXCIsXG4gICAgXCJAXCIsXG4gICAgXCImXCIsXG4gICAgXCJeXCIsXG4gICAgXCIlXCJcbiAgXSxcbiAgc3ltYm9sczogL1s9Pjw6QFxcXiZ8K1xcLSpcXC9cXF4lXSsvLFxuICB0b2tlbml6ZXI6IHtcbiAgICByb290OiBbXG4gICAgICBbXG4gICAgICAgIC9bYS16QS1aX11bXFx3XSovLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGtleXdvcmRzXCI6IHsgdG9rZW46IFwia2V5d29yZC4kMFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiaWRlbnRpZmllclwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgeyBpbmNsdWRlOiBcIkB3aGl0ZXNwYWNlXCIgfSxcbiAgICAgIFsvW3t9KClcXFtcXF1dLywgXCJAYnJhY2tldHNcIl0sXG4gICAgICBbL1s8Pl0oPyFAc3ltYm9scykvLCBcIkBicmFja2V0c1wiXSxcbiAgICAgIFtcbiAgICAgICAgL0BzeW1ib2xzLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBvcGVyYXRvcnNcIjogXCJkZWxpbWl0ZXJcIixcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFsvXFwkWzAtOWEtZkEtRl17MSwxNn0vLCBcIm51bWJlci5oZXhcIl0sXG4gICAgICBbL1xcZCsvLCBcIm51bWJlclwiXSxcbiAgICAgIFsvWzssLl0vLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFsvJyhbXidcXFxcXXxcXFxcLikqJC8sIFwic3RyaW5nLmludmFsaWRcIl0sXG4gICAgICBbLycvLCBcInN0cmluZ1wiLCBcIkBzdHJpbmdcIl0sXG4gICAgICBbLydbXlxcXFwnXScvLCBcInN0cmluZ1wiXSxcbiAgICAgIFsvJy8sIFwic3RyaW5nLmludmFsaWRcIl0sXG4gICAgICBbL1xcI1xcZCsvLCBcInN0cmluZ1wiXVxuICAgIF0sXG4gICAgY29tbWVudDogW1xuICAgICAgWy9bXlxcKFxcKl0rLywgXCJjb21tZW50XCJdLFxuICAgICAgWy9cXCpcXCkvLCBcImNvbW1lbnRcIiwgXCJAcG9wXCJdLFxuICAgICAgWy9cXChcXCovLCBcImNvbW1lbnRcIl1cbiAgICBdLFxuICAgIHN0cmluZzogW1xuICAgICAgWy9bXlxcXFwnXSsvLCBcInN0cmluZ1wiXSxcbiAgICAgIFsvXFxcXC4vLCBcInN0cmluZy5lc2NhcGUuaW52YWxpZFwiXSxcbiAgICAgIFsvJy8sIHsgdG9rZW46IFwic3RyaW5nLnF1b3RlXCIsIGJyYWNrZXQ6IFwiQGNsb3NlXCIsIG5leHQ6IFwiQHBvcFwiIH1dXG4gICAgXSxcbiAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICBbL1sgXFx0XFxyXFxuXSsvLCBcIndoaXRlXCJdLFxuICAgICAgWy9cXChcXCovLCBcImNvbW1lbnRcIiwgXCJAY29tbWVudFwiXSxcbiAgICAgIFsvXFwvXFwvLiokLywgXCJjb21tZW50XCJdXG4gICAgXVxuICB9XG59O1xuZXhwb3J0IHtcbiAgY29uZixcbiAgbGFuZ3VhZ2Vcbn07XG4iXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJzdXJyb3VuZGluZ1BhaXJzIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJpZ25vcmVDYXNlIiwidG9rZW4iLCJrZXl3b3JkcyIsInR5cGVLZXl3b3JkcyIsIm9wZXJhdG9ycyIsInN5bWJvbHMiLCJ0b2tlbml6ZXIiLCJyb290IiwiY2FzZXMiLCJpbmNsdWRlIiwiY29tbWVudCIsInN0cmluZyIsImJyYWNrZXQiLCJuZXh0Iiwid2hpdGVzcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=