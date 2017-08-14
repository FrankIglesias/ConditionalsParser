Expresions = value:('true'/'false') {return value==='true'}
        / Conditionals
Conditionals = 'if ' conditional:Expresions ' then ' truttyBranch:Expresions ' else ' falsyBranch:Expresions {return Object.assign({},{condition: conditional, branch1: truttyBranch, branch2: falsyBranch}); }        