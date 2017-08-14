Expresions = Boolean
        / Conditional
        / Numbers
Boolean = value:('true'/'false') {return value==='true'}
Numbers = value:[0-9]+ {return parseInt(value)}
Conditional = 'if' _ conditional:Expresions _ 'then' _ truttyBranch:Expresions _ 'else' _ falsyBranch:Expresions _* {return Object.assign({},{condition: conditional, branch1: truttyBranch, branch2: falsyBranch}); }     
  _ = [ \t\n\r]+