## Notes
> var: function scope
>
> let: block scope
> 
> const: block scope + no reassigning


1. (var) line 9 prints 20
2. (var) line 13 prints 20
3. (let) line 9 prints 20
4. (let) line 13 prints error because result is defined (in the if block) which is outside the scope of where result is being accessed
5. (const) line 9 prints error because in line 7 result is being reassigned as a const
6. (const) line 13 prints an error because result is outside the scope of the print statment 