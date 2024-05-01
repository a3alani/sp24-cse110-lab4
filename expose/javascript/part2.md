1. (i) line 12 prints 3, why because when i is incremented to 3 it breaks out of the loop and the print happens to be after the for loop block. Since i is a var it could be accessed anywhere within the function scope
2. (discountedPrice) line 13 prints 150 because it is the last item in the list which the discount applied to 300 * 0.5 = 150. Since discountedPrice is a var it could be accessed anywhere within the function scope
3. (finalPrice) line 14 prints out 150 does some operations on discountedPrice which is last assigned to be 150. Since finalPrice is a var it could be accessed anywhere within the function scope
4. the function returns a list of the prices that were passed in after they have been discounted. I printed it out to see the ouput (discounted) was [50,100,150] because each of the prices was discounted by the factor 0.5
5. (i) returns error becuase i is let and now trying to be accessed outside the scope of the function it was defined in
6. (discountedPrice) returns an error because discountedPrice is defined with let inside a for loop block and is trying to be accessed outside the block scope
7. (finalPrice) line 14 prints out 150 because it was defined within the same block it is being accessed in
8. the function returns a list of the prices that were passed in after they have been discounted. I printed it out to see the ouput (discounted) was [50,100,150] because each of the prices was discounted by the factor 0.5
9. (i) returns error becuase i is let and now trying to be accessed outside the scope of the function it was defined in
10. (lenght) prints 3 because length is a const which is initialized to the length of prices. Prices is an argument with 3 ints so we get 3
11. the function returns a list of the prices that were passed in after they have been discounted. I printed it out to see the ouput (discounted) was [50,100,150] because each of the prices was discounted by the factor 0.5

12. PART 12
> Notes
> - There are 9 data types in JS
> - variables aren't initialized as a single type in JS
> - JSON object: JavaScript Object Notation

- [X] Accessing the value of the name property in the student object
- ```student.name```
- [X] Accessing the value of the Grad Year property in the student object
- ```student["Grad Year"]```
- [X] Calling the function for the greeting property in the student object
- ```student.greet()```
- [X] Accessing the name property of the object in the Favorite Teacher property in student
- ```student["fav teacher"].name```
- [X] Access index zero in the array of the courseLoad property of the student object
- ```student.courseload[0]```

13. Arithmatic
- [X] '3' + 2
- '32'
- [X] '3' - 2
- 1
- [X] 3 + null
- 3
- [X] '3' + null
- '3null'
- [X] true + 3
- 4
- [X] False + null
- 0
- [X] '3' + undefined
- '3undefined'
- [X] '3' - undefined
- NaN

14. Comparison
- [X] '2' > 1
- true
- [X] '2' < '12'
- false
- [X] 2 == '2'
- true
- [X] 2 === '2'
- false
- [X] true == 2
- false
- [X] true === Boolean(2)
- true

15. the difference between == and === is that == checks if the values are equal while === check for value and type equality

16. Please check part2-question16.js :)

17. The call returns [2,4,6]
    
    Whats happening is that doSomething is passed as an argument to modifyArray and is being called on the values in the other argument array for every element. The doSomething function double every element by 2 so it goes from 1 2 3 to 4 5 6

18. Please check part2-question18.js :)

19. 1 and 4 were printed first in order respectivly since there was no timeout on them, after that 3 was printed since there was timeout but with 0 seconds. Lastly but not leastly 2 was printed after 1000 ms or 1 second

