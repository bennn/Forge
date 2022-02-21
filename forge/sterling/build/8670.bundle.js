/*! For license information please see 8670.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksterling_ts=self.webpackChunksterling_ts||[]).push([[8670],{88670:(e,r,t)=>{t.r(r),t.d(r,{conf:()=>i,language:()=>o});var i={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}]},o={defaultToken:"",ignoreCase:!0,tokenPostfix:".shell",brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],builtins:["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"],symbols:/[=><!~?&|+\-*\/\^;\.,]+/,tokenizer:{root:[{include:"@whitespace"},[/[a-zA-Z]\w*/,{cases:{"@keywords":"keyword","@builtins":"type.identifier","@default":""}}],{include:"@strings"},{include:"@parameters"},{include:"@heredoc"},[/[{}\[\]()]/,"@brackets"],[/-+\w+/,"attribute.name"],[/@symbols/,"delimiter"],{include:"@numbers"},[/[,;]/,"delimiter"]],whitespace:[[/\s+/,"white"],[/(^#!.*$)/,"metatag"],[/(^#.*$)/,"comment"]],numbers:[[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"number.hex"],[/\d+/,"number"]],strings:[[/'/,"string","@stringBody"],[/"/,"string","@dblStringBody"]],stringBody:[[/'/,"string","@popall"],[/./,"string"]],dblStringBody:[[/"/,"string","@popall"],[/./,"string"]],heredoc:[[/(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,["constants","white","string.heredoc.delimiter","string.heredoc","string.heredoc.delimiter"]]],parameters:[[/\$\d+/,"variable.predefined"],[/\$\w+/,"variable"],[/\$[*@#?\-$!0_]/,"variable"],[/\$'/,"variable","@parameterBodyQuote"],[/\$"/,"variable","@parameterBodyDoubleQuote"],[/\$\(/,"variable","@parameterBodyParen"],[/\$\{/,"variable","@parameterBodyCurlyBrace"]],parameterBodyQuote:[[/[^#:%*@\-!_']+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[']/,"variable","@pop"]],parameterBodyDoubleQuote:[[/[^#:%*@\-!_"]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/["]/,"variable","@pop"]],parameterBodyParen:[[/[^#:%*@\-!_)]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[)]/,"variable","@pop"]],parameterBodyCurlyBrace:[[/[^#:%*@\-!_}]+/,"variable"],[/[#:%*@\-!_]/,"delimiter"],[/[}]/,"variable","@pop"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsT0FBUSxXQUFZLHVCQUNyQixDQUFDLE9BQVEsV0FBWSw2QkFFdkJDLG1CQUFvQixDQUNsQixDQUFDLGlCQUFrQixZQUNuQixDQUFDLGNBQWUsYUFDaEIsQ0FBQyxNQUFPLFdBQVksU0FFdEJDLHlCQUEwQixDQUN4QixDQUFDLGlCQUFrQixZQUNuQixDQUFDLGNBQWUsYUFDaEIsQ0FBQyxNQUFPLFdBQVksU0FFdEJDLG1CQUFvQixDQUNsQixDQUFDLGlCQUFrQixZQUNuQixDQUFDLGNBQWUsYUFDaEIsQ0FBQyxNQUFPLFdBQVksU0FFdEJDLHdCQUF5QixDQUN2QixDQUFDLGlCQUFrQixZQUNuQixDQUFDLGNBQWUsYUFDaEIsQ0FBQyxNQUFPLFdBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGVybGluZy10cy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvc2hlbGwvc2hlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVmVyc2lvbjogMC4zMS4xKDMzNzU4Nzg1OWIxYzE3MTMxNGI0MDUwMzE3MTE4OGI2Y2VhNmEzMmEpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvbW9uYWNvLWVkaXRvci9ibG9iL21haW4vTElDRU5TRS50eHRcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBzcmMvYmFzaWMtbGFuZ3VhZ2VzL3NoZWxsL3NoZWxsLnRzXG52YXIgY29uZiA9IHtcbiAgY29tbWVudHM6IHtcbiAgICBsaW5lQ29tbWVudDogXCIjXCJcbiAgfSxcbiAgYnJhY2tldHM6IFtcbiAgICBbXCJ7XCIsIFwifVwiXSxcbiAgICBbXCJbXCIsIFwiXVwiXSxcbiAgICBbXCIoXCIsIFwiKVwiXVxuICBdLFxuICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgeyBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiIH0sXG4gICAgeyBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH0sXG4gICAgeyBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiIH0sXG4gICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgIHsgb3BlbjogXCJgXCIsIGNsb3NlOiBcImBcIiB9XG4gIF0sXG4gIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgeyBvcGVuOiBcImBcIiwgY2xvc2U6IFwiYFwiIH1cbiAgXVxufTtcbnZhciBsYW5ndWFnZSA9IHtcbiAgZGVmYXVsdFRva2VuOiBcIlwiLFxuICBpZ25vcmVDYXNlOiB0cnVlLFxuICB0b2tlblBvc3RmaXg6IFwiLnNoZWxsXCIsXG4gIGJyYWNrZXRzOiBbXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIuYnJhY2tldFwiLCBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiIH0sXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIucGFyZW50aGVzaXNcIiwgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLnNxdWFyZVwiLCBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH1cbiAgXSxcbiAga2V5d29yZHM6IFtcbiAgICBcImlmXCIsXG4gICAgXCJ0aGVuXCIsXG4gICAgXCJkb1wiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZWxpZlwiLFxuICAgIFwid2hpbGVcIixcbiAgICBcInVudGlsXCIsXG4gICAgXCJmb3JcIixcbiAgICBcImluXCIsXG4gICAgXCJlc2FjXCIsXG4gICAgXCJmaVwiLFxuICAgIFwiZmluXCIsXG4gICAgXCJmaWxcIixcbiAgICBcImRvbmVcIixcbiAgICBcImV4aXRcIixcbiAgICBcInNldFwiLFxuICAgIFwidW5zZXRcIixcbiAgICBcImV4cG9ydFwiLFxuICAgIFwiZnVuY3Rpb25cIlxuICBdLFxuICBidWlsdGluczogW1xuICAgIFwiYWJcIixcbiAgICBcImF3a1wiLFxuICAgIFwiYmFzaFwiLFxuICAgIFwiYmVlcFwiLFxuICAgIFwiY2F0XCIsXG4gICAgXCJjY1wiLFxuICAgIFwiY2RcIixcbiAgICBcImNob3duXCIsXG4gICAgXCJjaG1vZFwiLFxuICAgIFwiY2hyb290XCIsXG4gICAgXCJjbGVhclwiLFxuICAgIFwiY3BcIixcbiAgICBcImN1cmxcIixcbiAgICBcImN1dFwiLFxuICAgIFwiZGlmZlwiLFxuICAgIFwiZWNob1wiLFxuICAgIFwiZmluZFwiLFxuICAgIFwiZ2F3a1wiLFxuICAgIFwiZ2NjXCIsXG4gICAgXCJnZXRcIixcbiAgICBcImdpdFwiLFxuICAgIFwiZ3JlcFwiLFxuICAgIFwiaGdcIixcbiAgICBcImtpbGxcIixcbiAgICBcImtpbGxhbGxcIixcbiAgICBcImxuXCIsXG4gICAgXCJsc1wiLFxuICAgIFwibWFrZVwiLFxuICAgIFwibWtkaXJcIixcbiAgICBcIm9wZW5zc2xcIixcbiAgICBcIm12XCIsXG4gICAgXCJuY1wiLFxuICAgIFwibm9kZVwiLFxuICAgIFwibnBtXCIsXG4gICAgXCJwaW5nXCIsXG4gICAgXCJwc1wiLFxuICAgIFwicmVzdGFydFwiLFxuICAgIFwicm1cIixcbiAgICBcInJtZGlyXCIsXG4gICAgXCJzZWRcIixcbiAgICBcInNlcnZpY2VcIixcbiAgICBcInNoXCIsXG4gICAgXCJzaG9wdFwiLFxuICAgIFwic2hyZWRcIixcbiAgICBcInNvdXJjZVwiLFxuICAgIFwic29ydFwiLFxuICAgIFwic2xlZXBcIixcbiAgICBcInNzaFwiLFxuICAgIFwic3RhcnRcIixcbiAgICBcInN0b3BcIixcbiAgICBcInN1XCIsXG4gICAgXCJzdWRvXCIsXG4gICAgXCJzdm5cIixcbiAgICBcInRlZVwiLFxuICAgIFwidGVsbmV0XCIsXG4gICAgXCJ0b3BcIixcbiAgICBcInRvdWNoXCIsXG4gICAgXCJ2aVwiLFxuICAgIFwidmltXCIsXG4gICAgXCJ3YWxsXCIsXG4gICAgXCJ3Y1wiLFxuICAgIFwid2dldFwiLFxuICAgIFwid2hvXCIsXG4gICAgXCJ3cml0ZVwiLFxuICAgIFwieWVzXCIsXG4gICAgXCJ6c2hcIlxuICBdLFxuICBzeW1ib2xzOiAvWz0+PCF+PyZ8K1xcLSpcXC9cXF47XFwuLF0rLyxcbiAgdG9rZW5pemVyOiB7XG4gICAgcm9vdDogW1xuICAgICAgeyBpbmNsdWRlOiBcIkB3aGl0ZXNwYWNlXCIgfSxcbiAgICAgIFtcbiAgICAgICAgL1thLXpBLVpdXFx3Ki8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAa2V5d29yZHNcIjogXCJrZXl3b3JkXCIsXG4gICAgICAgICAgICBcIkBidWlsdGluc1wiOiBcInR5cGUuaWRlbnRpZmllclwiLFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgeyBpbmNsdWRlOiBcIkBzdHJpbmdzXCIgfSxcbiAgICAgIHsgaW5jbHVkZTogXCJAcGFyYW1ldGVyc1wiIH0sXG4gICAgICB7IGluY2x1ZGU6IFwiQGhlcmVkb2NcIiB9LFxuICAgICAgWy9be31cXFtcXF0oKV0vLCBcIkBicmFja2V0c1wiXSxcbiAgICAgIFsvLStcXHcrLywgXCJhdHRyaWJ1dGUubmFtZVwiXSxcbiAgICAgIFsvQHN5bWJvbHMvLCBcImRlbGltaXRlclwiXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAbnVtYmVyc1wiIH0sXG4gICAgICBbL1ssO10vLCBcImRlbGltaXRlclwiXVxuICAgIF0sXG4gICAgd2hpdGVzcGFjZTogW1xuICAgICAgWy9cXHMrLywgXCJ3aGl0ZVwiXSxcbiAgICAgIFsvKF4jIS4qJCkvLCBcIm1ldGF0YWdcIl0sXG4gICAgICBbLyheIy4qJCkvLCBcImNvbW1lbnRcIl1cbiAgICBdLFxuICAgIG51bWJlcnM6IFtcbiAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFsvMFt4WF1bMC05YS1mQS1GX10qWzAtOWEtZkEtRl0vLCBcIm51bWJlci5oZXhcIl0sXG4gICAgICBbL1xcZCsvLCBcIm51bWJlclwiXVxuICAgIF0sXG4gICAgc3RyaW5nczogW1xuICAgICAgWy8nLywgXCJzdHJpbmdcIiwgXCJAc3RyaW5nQm9keVwiXSxcbiAgICAgIFsvXCIvLCBcInN0cmluZ1wiLCBcIkBkYmxTdHJpbmdCb2R5XCJdXG4gICAgXSxcbiAgICBzdHJpbmdCb2R5OiBbXG4gICAgICBbLycvLCBcInN0cmluZ1wiLCBcIkBwb3BhbGxcIl0sXG4gICAgICBbLy4vLCBcInN0cmluZ1wiXVxuICAgIF0sXG4gICAgZGJsU3RyaW5nQm9keTogW1xuICAgICAgWy9cIi8sIFwic3RyaW5nXCIsIFwiQHBvcGFsbFwiXSxcbiAgICAgIFsvLi8sIFwic3RyaW5nXCJdXG4gICAgXSxcbiAgICBoZXJlZG9jOiBbXG4gICAgICBbXG4gICAgICAgIC8oPDxbLTxdPykoXFxzKikoWydcImBdPykoW1xcd1xcLV0rKShbJ1wiYF0/KS8sXG4gICAgICAgIFtcbiAgICAgICAgICBcImNvbnN0YW50c1wiLFxuICAgICAgICAgIFwid2hpdGVcIixcbiAgICAgICAgICBcInN0cmluZy5oZXJlZG9jLmRlbGltaXRlclwiLFxuICAgICAgICAgIFwic3RyaW5nLmhlcmVkb2NcIixcbiAgICAgICAgICBcInN0cmluZy5oZXJlZG9jLmRlbGltaXRlclwiXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICBdLFxuICAgIHBhcmFtZXRlcnM6IFtcbiAgICAgIFsvXFwkXFxkKy8sIFwidmFyaWFibGUucHJlZGVmaW5lZFwiXSxcbiAgICAgIFsvXFwkXFx3Ky8sIFwidmFyaWFibGVcIl0sXG4gICAgICBbL1xcJFsqQCM/XFwtJCEwX10vLCBcInZhcmlhYmxlXCJdLFxuICAgICAgWy9cXCQnLywgXCJ2YXJpYWJsZVwiLCBcIkBwYXJhbWV0ZXJCb2R5UXVvdGVcIl0sXG4gICAgICBbL1xcJFwiLywgXCJ2YXJpYWJsZVwiLCBcIkBwYXJhbWV0ZXJCb2R5RG91YmxlUXVvdGVcIl0sXG4gICAgICBbL1xcJFxcKC8sIFwidmFyaWFibGVcIiwgXCJAcGFyYW1ldGVyQm9keVBhcmVuXCJdLFxuICAgICAgWy9cXCRcXHsvLCBcInZhcmlhYmxlXCIsIFwiQHBhcmFtZXRlckJvZHlDdXJseUJyYWNlXCJdXG4gICAgXSxcbiAgICBwYXJhbWV0ZXJCb2R5UXVvdGU6IFtcbiAgICAgIFsvW14jOiUqQFxcLSFfJ10rLywgXCJ2YXJpYWJsZVwiXSxcbiAgICAgIFsvWyM6JSpAXFwtIV9dLywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICBbL1snXS8sIFwidmFyaWFibGVcIiwgXCJAcG9wXCJdXG4gICAgXSxcbiAgICBwYXJhbWV0ZXJCb2R5RG91YmxlUXVvdGU6IFtcbiAgICAgIFsvW14jOiUqQFxcLSFfXCJdKy8sIFwidmFyaWFibGVcIl0sXG4gICAgICBbL1sjOiUqQFxcLSFfXS8sIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgWy9bXCJdLywgXCJ2YXJpYWJsZVwiLCBcIkBwb3BcIl1cbiAgICBdLFxuICAgIHBhcmFtZXRlckJvZHlQYXJlbjogW1xuICAgICAgWy9bXiM6JSpAXFwtIV8pXSsvLCBcInZhcmlhYmxlXCJdLFxuICAgICAgWy9bIzolKkBcXC0hX10vLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFsvWyldLywgXCJ2YXJpYWJsZVwiLCBcIkBwb3BcIl1cbiAgICBdLFxuICAgIHBhcmFtZXRlckJvZHlDdXJseUJyYWNlOiBbXG4gICAgICBbL1teIzolKkBcXC0hX31dKy8sIFwidmFyaWFibGVcIl0sXG4gICAgICBbL1sjOiUqQFxcLSFfXS8sIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgWy9bfV0vLCBcInZhcmlhYmxlXCIsIFwiQHBvcFwiXVxuICAgIF1cbiAgfVxufTtcbmV4cG9ydCB7XG4gIGNvbmYsXG4gIGxhbmd1YWdlXG59O1xuIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwiaWdub3JlQ2FzZSIsInRva2VuUG9zdGZpeCIsInRva2VuIiwia2V5d29yZHMiLCJidWlsdGlucyIsInN5bWJvbHMiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsImNhc2VzIiwid2hpdGVzcGFjZSIsIm51bWJlcnMiLCJzdHJpbmdzIiwic3RyaW5nQm9keSIsImRibFN0cmluZ0JvZHkiLCJoZXJlZG9jIiwicGFyYW1ldGVycyIsInBhcmFtZXRlckJvZHlRdW90ZSIsInBhcmFtZXRlckJvZHlEb3VibGVRdW90ZSIsInBhcmFtZXRlckJvZHlQYXJlbiIsInBhcmFtZXRlckJvZHlDdXJseUJyYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==