/*! For license information please see 2060.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksterling_ts=self.webpackChunksterling_ts||[]).push([[2060],{32060:(e,o,n)=>{n.r(o),n.d(o,{conf:()=>t,language:()=>s});var t={comments:{lineComment:";",blockComment:["#|","|#"]},brackets:[["(",")"],["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},s={defaultToken:"",ignoreCase:!0,tokenPostfix:".scheme",brackets:[{open:"(",close:")",token:"delimiter.parenthesis"},{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"}],keywords:["case","do","let","loop","if","else","when","cons","car","cdr","cond","lambda","lambda*","syntax-rules","format","set!","quote","eval","append","list","list?","member?","load"],constants:["#t","#f"],operators:["eq?","eqv?","equal?","and","or","not","null?"],tokenizer:{root:[[/#[xXoObB][0-9a-fA-F]+/,"number.hex"],[/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/,"number.float"],[/(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,["keyword","white","variable"]],{include:"@whitespace"},{include:"@strings"},[/[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,{cases:{"@keywords":"keyword","@constants":"constant","@operators":"operators","@default":"identifier"}}]],comment:[[/[^\|#]+/,"comment"],[/#\|/,"comment","@push"],[/\|#/,"comment","@pop"],[/[\|#]/,"comment"]],whitespace:[[/[ \t\r\n]+/,"white"],[/#\|/,"comment","@comment"],[/;.*$/,"comment"]],strings:[[/"$/,"string","@popall"],[/"(?=.)/,"string","@multiLineString"]],multiLineString:[[/[^\\"]+$/,"string","@popall"],[/[^\\"]+/,"string"],[/\\./,"string.escape"],[/"/,"string","@popall"],[/\\$/,"string"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA2MC5idW5kbGUuanMiLCJtYXBwaW5ncyI6IjtxSkFRQSxJQUFJQSxFQUFPLENBQ1RDLFNBQVUsQ0FDUkMsWUFBYSxJQUNiQyxhQUFjLENBQUMsS0FBTSxPQUV2QkMsU0FBVSxDQUNSLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxNQUVSQyxpQkFBa0IsQ0FDaEIsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE1BRXRCQyxpQkFBa0IsQ0FDaEIsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE9BR3BCRSxFQUFXLENBQ2JDLGFBQWMsR0FDZEMsWUFBWSxFQUNaQyxhQUFjLFVBQ2RSLFNBQVUsQ0FDUixDQUFFRSxLQUFNLElBQUtDLE1BQU8sSUFBS00sTUFBTyx5QkFDaEMsQ0FBRVAsS0FBTSxJQUFLQyxNQUFPLElBQUtNLE1BQU8sbUJBQ2hDLENBQUVQLEtBQU0sSUFBS0MsTUFBTyxJQUFLTSxNQUFPLHFCQUVsQ0MsU0FBVSxDQUNSLE9BQ0EsS0FDQSxNQUNBLE9BQ0EsS0FDQSxPQUNBLE9BQ0EsT0FDQSxNQUNBLE1BQ0EsT0FDQSxTQUNBLFVBQ0EsZUFDQSxTQUNBLE9BQ0EsUUFDQSxPQUNBLFNBQ0EsT0FDQSxRQUNBLFVBQ0EsUUFFRkMsVUFBVyxDQUFDLEtBQU0sTUFDbEJDLFVBQVcsQ0FBQyxNQUFPLE9BQVEsU0FBVSxNQUFPLEtBQU0sTUFBTyxTQUN6REMsVUFBVyxDQUNUQyxLQUFNLENBQ0osQ0FBQyx3QkFBeUIsY0FDMUIsQ0FBQywyQ0FBNEMsZ0JBQzdDLENBQ0UseUVBQ0EsQ0FBQyxVQUFXLFFBQVMsYUFFdkIsQ0FBRUMsUUFBUyxlQUNYLENBQUVBLFFBQVMsWUFDWCxDQUNFLGtDQUNBLENBQ0VDLE1BQU8sQ0FDTCxZQUFhLFVBQ2IsYUFBYyxXQUNkLGFBQWMsWUFDZCxXQUFZLGlCQUtwQkMsUUFBUyxDQUNQLENBQUMsVUFBVyxXQUNaLENBQUMsTUFBTyxVQUFXLFNBQ25CLENBQUMsTUFBTyxVQUFXLFFBQ25CLENBQUMsUUFBUyxZQUVaQyxXQUFZLENBQ1YsQ0FBQyxhQUFjLFNBQ2YsQ0FBQyxNQUFPLFVBQVcsWUFDbkIsQ0FBQyxPQUFRLFlBRVhDLFFBQVMsQ0FDUCxDQUFDLEtBQU0sU0FBVSxXQUNqQixDQUFDLFNBQVUsU0FBVSxxQkFFdkJDLGdCQUFpQixDQUNmLENBQUMsV0FBWSxTQUFVLFdBQ3ZCLENBQUMsVUFBVyxVQUNaLENBQUMsTUFBTyxpQkFDUixDQUFDLElBQUssU0FBVSxXQUNoQixDQUFDLE1BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGVybGluZy10cy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc2NoZW1lL3NjaGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBWZXJzaW9uOiAwLjMxLjEoMzM3NTg3ODU5YjFjMTcxMzE0YjQwNTAzMTcxMTg4YjZjZWE2YTMyYSlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9tb25hY28tZWRpdG9yL2Jsb2IvbWFpbi9MSUNFTlNFLnR4dFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIHNyYy9iYXNpYy1sYW5ndWFnZXMvc2NoZW1lL3NjaGVtZS50c1xudmFyIGNvbmYgPSB7XG4gIGNvbW1lbnRzOiB7XG4gICAgbGluZUNvbW1lbnQ6IFwiO1wiLFxuICAgIGJsb2NrQ29tbWVudDogW1wiI3xcIiwgXCJ8I1wiXVxuICB9LFxuICBicmFja2V0czogW1xuICAgIFtcIihcIiwgXCIpXCJdLFxuICAgIFtcIntcIiwgXCJ9XCJdLFxuICAgIFtcIltcIiwgXCJdXCJdXG4gIF0sXG4gIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgXSxcbiAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICBdXG59O1xudmFyIGxhbmd1YWdlID0ge1xuICBkZWZhdWx0VG9rZW46IFwiXCIsXG4gIGlnbm9yZUNhc2U6IHRydWUsXG4gIHRva2VuUG9zdGZpeDogXCIuc2NoZW1lXCIsXG4gIGJyYWNrZXRzOiBbXG4gICAgeyBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiLCB0b2tlbjogXCJkZWxpbWl0ZXIucGFyZW50aGVzaXNcIiB9LFxuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiwgdG9rZW46IFwiZGVsaW1pdGVyLmN1cmx5XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIsIHRva2VuOiBcImRlbGltaXRlci5zcXVhcmVcIiB9XG4gIF0sXG4gIGtleXdvcmRzOiBbXG4gICAgXCJjYXNlXCIsXG4gICAgXCJkb1wiLFxuICAgIFwibGV0XCIsXG4gICAgXCJsb29wXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwid2hlblwiLFxuICAgIFwiY29uc1wiLFxuICAgIFwiY2FyXCIsXG4gICAgXCJjZHJcIixcbiAgICBcImNvbmRcIixcbiAgICBcImxhbWJkYVwiLFxuICAgIFwibGFtYmRhKlwiLFxuICAgIFwic3ludGF4LXJ1bGVzXCIsXG4gICAgXCJmb3JtYXRcIixcbiAgICBcInNldCFcIixcbiAgICBcInF1b3RlXCIsXG4gICAgXCJldmFsXCIsXG4gICAgXCJhcHBlbmRcIixcbiAgICBcImxpc3RcIixcbiAgICBcImxpc3Q/XCIsXG4gICAgXCJtZW1iZXI/XCIsXG4gICAgXCJsb2FkXCJcbiAgXSxcbiAgY29uc3RhbnRzOiBbXCIjdFwiLCBcIiNmXCJdLFxuICBvcGVyYXRvcnM6IFtcImVxP1wiLCBcImVxdj9cIiwgXCJlcXVhbD9cIiwgXCJhbmRcIiwgXCJvclwiLCBcIm5vdFwiLCBcIm51bGw/XCJdLFxuICB0b2tlbml6ZXI6IHtcbiAgICByb290OiBbXG4gICAgICBbLyNbeFhvT2JCXVswLTlhLWZBLUZdKy8sIFwibnVtYmVyLmhleFwiXSxcbiAgICAgIFsvWystXT9cXGQrKD86KD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KT8vLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFtcbiAgICAgICAgLyg/OlxcYig/OihkZWZpbmV8ZGVmaW5lLXN5bnRheHxkZWZpbmUtbWFjcm8pKVxcYikoXFxzKykoKD86XFx3fFxcLXxcXCF8XFw/KSopLyxcbiAgICAgICAgW1wia2V5d29yZFwiLCBcIndoaXRlXCIsIFwidmFyaWFibGVcIl1cbiAgICAgIF0sXG4gICAgICB7IGluY2x1ZGU6IFwiQHdoaXRlc3BhY2VcIiB9LFxuICAgICAgeyBpbmNsdWRlOiBcIkBzdHJpbmdzXCIgfSxcbiAgICAgIFtcbiAgICAgICAgL1thLXpBLVpfI11bYS16QS1aMC05X1xcLVxcP1xcIVxcKl0qLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBrZXl3b3Jkc1wiOiBcImtleXdvcmRcIixcbiAgICAgICAgICAgIFwiQGNvbnN0YW50c1wiOiBcImNvbnN0YW50XCIsXG4gICAgICAgICAgICBcIkBvcGVyYXRvcnNcIjogXCJvcGVyYXRvcnNcIixcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogXCJpZGVudGlmaWVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdLFxuICAgIGNvbW1lbnQ6IFtcbiAgICAgIFsvW15cXHwjXSsvLCBcImNvbW1lbnRcIl0sXG4gICAgICBbLyNcXHwvLCBcImNvbW1lbnRcIiwgXCJAcHVzaFwiXSxcbiAgICAgIFsvXFx8Iy8sIFwiY29tbWVudFwiLCBcIkBwb3BcIl0sXG4gICAgICBbL1tcXHwjXS8sIFwiY29tbWVudFwiXVxuICAgIF0sXG4gICAgd2hpdGVzcGFjZTogW1xuICAgICAgWy9bIFxcdFxcclxcbl0rLywgXCJ3aGl0ZVwiXSxcbiAgICAgIFsvI1xcfC8sIFwiY29tbWVudFwiLCBcIkBjb21tZW50XCJdLFxuICAgICAgWy87LiokLywgXCJjb21tZW50XCJdXG4gICAgXSxcbiAgICBzdHJpbmdzOiBbXG4gICAgICBbL1wiJC8sIFwic3RyaW5nXCIsIFwiQHBvcGFsbFwiXSxcbiAgICAgIFsvXCIoPz0uKS8sIFwic3RyaW5nXCIsIFwiQG11bHRpTGluZVN0cmluZ1wiXVxuICAgIF0sXG4gICAgbXVsdGlMaW5lU3RyaW5nOiBbXG4gICAgICBbL1teXFxcXFwiXSskLywgXCJzdHJpbmdcIiwgXCJAcG9wYWxsXCJdLFxuICAgICAgWy9bXlxcXFxcIl0rLywgXCJzdHJpbmdcIl0sXG4gICAgICBbL1xcXFwuLywgXCJzdHJpbmcuZXNjYXBlXCJdLFxuICAgICAgWy9cIi8sIFwic3RyaW5nXCIsIFwiQHBvcGFsbFwiXSxcbiAgICAgIFsvXFxcXCQvLCBcInN0cmluZ1wiXVxuICAgIF1cbiAgfVxufTtcbmV4cG9ydCB7XG4gIGNvbmYsXG4gIGxhbmd1YWdlXG59O1xuIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwiaWdub3JlQ2FzZSIsInRva2VuUG9zdGZpeCIsInRva2VuIiwia2V5d29yZHMiLCJjb25zdGFudHMiLCJvcGVyYXRvcnMiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsImNhc2VzIiwiY29tbWVudCIsIndoaXRlc3BhY2UiLCJzdHJpbmdzIiwibXVsdGlMaW5lU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==