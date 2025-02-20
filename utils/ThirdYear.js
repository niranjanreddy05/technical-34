export const questions = [
    {
		id: 1,
		questionText: 'What is the output of the following code snippet?',
        code:
`#include <iostream>

class Base {
public:
    virtual void print() {
	std::cout << "Base" << std::endl;
    }
};

class Derived : public Base {
public:
    void print() override {
	std::cout << "Derived" << std::endl;
    }
};

int main() {
    Base* ptr = new Derived();
    ptr->print();
    delete ptr;
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Derived'},
			{ answerID: 'b', answerText: 'Base'},
			{ answerID: 'c', answerText: 'new Derived'},
			{ answerID: 'd', answerText: 'None of these'},
		],
		correctResponse: 'a',
	},
	{
		id: 2,
		questionText: 'What is the purpose of the volatile keyword in C++?',
		answerOptions: [
			{ answerID: 'a', answerText: 'It indicates that a variable is not initialized'},
			{ answerID: 'b', answerText: 'It ensures that a variable is always initialized to 0'},
			{ answerID: 'c', answerText: 'It prevents the compiler from optimizing accesses to a variable'},
			{ answerID: 'd', answerText: 'It prevents a variable from being modified'},
		],
		correctResponse: 'c',
	},
	{
		id: 3,
		questionText: 'Which of the following is an example of a valid C++ lambda expression?',
		answerOptions: [
			{ answerID: 'a', answerText: '[]() { }'},
			{ answerID: 'b', answerText: '[]() { return 42; }'},
			{ answerID: 'c', answerText: '[](int x) { return x * 2; }'},
			{ answerID: 'd', answerText: 'All of the above.'},
		],
		correctResponse: 'd',
	},
	{
		id: 4,
		questionText: 'Which of the following is true regarding virtual destructors in C++?  ',
		answerOptions: [
			{ answerID: 'a', answerText: 'A class with a virtual destructor cannot be inherited.'},
			{ answerID: 'b', answerText: 'A virtual destructor ensures that derived class destructors are called.'},
			{ answerID: 'c', answerText: 'A virtual destructor prevents the deletion of objects.'},
			{ answerID: 'd', answerText: 'A virtual destructor is used to free memory allocated by new.'},
		],
		correctResponse: 'b',
	},
	{
		id: 5,
		questionText: 'What is the output of the following code snippet?',
        code:
`#include <iostream>

int main() {
    int x = 5;
    int y = ++x * 2;
    std::cout << x << " " << y << std::endl;
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '6 5'},
			{ answerID: 'b', answerText: '5 5'},
			{ answerID: 'c', answerText: '6 6'},
			{ answerID: 'd', answerText: 'None of these'},
		],
		correctResponse: 'd',
	},
	{
		id: 6,
		questionText: 'What is the output of the following code snippet?',
        code:
`#include <iostream>

int main() {
    int x = 10;
    int* ptr = &x;
    int& ref = *ptr;
    std::cout << x << " " << ref << std::endl;
    *ptr = 20;
    std::cout << x << " " << ref << std::endl;
    return 0;
}
        `,
		answerOptions: [
			{ answerID: 'a', answerText: '10 20 10 20'},
			{ answerID: 'b', answerText: '10 10 20 20'},
			{ answerID: 'c', answerText: '20 20 10 10'},
			{ answerID: 'd', answerText: 'None of these'},
		],
		correctResponse: 'b',
	},
	{
		id: 7,
		questionText: 'What is the output of the following code snippet?',
        code:
`#include <iostream>

int main() {
    int x = 10;
    if (x > 5) {
	int x = 5;
	std::cout << x << std::endl;
    }
    std::cout << x << std::endl;
    return 0;
}
        `,
		answerOptions: [
			{ answerID: 'a', answerText:'5 10'},
			{ answerID: 'b', answerText:'6 10'},
			{ answerID: 'c', answerText:'5 9'},
			{ answerID: 'd', answerText:'5 5'},
		],
		correctResponse: 'a',
	},
	{
		id: 8,
		questionText:'Find the output of below C++ program?',
        code:
`void Execute(int &x, int y = 200)
{
	int TEMP = x + y;
	x+= TEMP;
	if(y!=200)
		std::cout<<TEMP<<x<<y<<"--";
}

int main()
{
	int A=50, B=20;
	std::cout<<A<<B<<"--";
	Execute(A,B);
	std::cout<<A<<B<<"--";
	return 0;
}
        `,
		answerOptions: [
			{ answerID: 'a', answerText: '5020--5020--'},
			{ answerID: 'b', answerText: '5020--7012020--12020--'},
			{ answerID: 'c', answerText: '5020--70120200--5020'},
			{ answerID: 'd', answerText: '5020--7050200--5020—'},
		],
		correctResponse: 'b',
	},
	{
		id: 9,
		questionText: 'What does this function do?',
        code:
`void func() {
	std::vector<std::string> vecOfString(5, "Hi");

	for (std::string str : vecOfStr)
		std::cout << str << std::endl;
}
`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Initialize vect to 5 string with value "Hi"'},
			{ answerID: 'b', answerText: 'Initialize vect first element to a string with value "Hi" & prints them'},
			{ answerID: 'c', answerText: 'Initialize vect to 1 string with value "Hi" & prints only one'},
			{ answerID: 'd', answerText: 'Initialize vect to 5 string with value "Hi" & prints them'},
		],
		correctResponse: 'd',
	},
    {
		id: 10,
		questionText: 'Explain the bias-variance tradeoff in machine learning.',
		answerOptions: [
			{ answerID: 'a', answerText: 'It refers to the tradeoff between speed and accuracy '},
			{ answerID: 'b', answerText: 'It involves balancing model complexity and generalization performance '},
			{ answerID: 'c', answerText: 'It focuses on reducing the number of features in a model'},
			{ answerID: 'd', answerText: 'It is a measure of the computational resources required for training'},
		],
		correctResponse: 'b',
	},
    {
		id: 11,
		questionText: 'In binary classification, what is the formula for precision?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Precision = true positives / (true positives + false negatives)'},
			{ answerID: 'b', answerText: 'Precision = true positives / (true positives + false positives)'},
			{ answerID: 'c', answerText: 'Precision = true positives / total samples'},
			{ answerID: 'd', answerText: 'Precision = (true positives + true negatives) / total samples'},
		],
		correctResponse: 'b',
	},
    {
		id: 12,
		questionText: 'Which machine learning algorithm is particularly well-suited for dealing with textual data and is based on probability theory?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Decision Trees'},
			{ answerID: 'b', answerText: 'k-Nearest Neighbors (k-NN)'},
			{ answerID: 'c', answerText: 'Naive Bayes'},
			{ answerID: 'd', answerText: 'Support Vector Machines (SVM)'},
		],
		correctResponse: 'c',
	},
    {
		id: 13,
		questionText: 'The IP network 192.168.50.0 is to be divided into 10 equal sized subnets. Which of the following subnet masks can be used for the above requirement?',
		answerOptions: [
			{ answerID: 'a', answerText: '255.243.240'},
			{ answerID: 'b', answerText: '255.255.0.0'},
			{ answerID: 'c', answerText: '255.255.0'},
			{ answerID: 'd', answerText: '255.255.255'},
		],
		correctResponse: 'c',
	},
    {
        id: 14,
		questionText: "Identify the first network which was based on TCP/IP protocol.",
		answerOptions: [
            { answerID: 'a', answerText: 'ARPANET'},
			{ answerID: 'b', answerText: 'HUB'},
			{ answerID: 'c', answerText: 'Ethernat Card'},
			{ answerID: 'd', answerText: 'Router'},
		],
		correctResponse: 'a',
	},
    {
        id: 15,
        questionText: 'Why the following statement is erroneous?  ',
        code:
`SELECT dept_name, ID, avg (salary)
FROM instructorS
GROUP BY dept_name;`,
        answerOptions: [
            { answerID: 'a', answerText: 'Dept_id should not be used in group by clause'},
            { answerID: 'b', answerText: 'Group by clause is not valid in this query'},
            { answerID: 'c', answerText: 'Avg(salary) should not be selected'},
            { answerID: 'd', answerText: 'None'},
        ],
        correctResponse: 'a',
    },
    {
		id: 16,
		questionText: 'Which of the following is correct according to the technology deployed by DBMS?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Pointers are used to maintain transactional integrity and consistency'},
			{ answerID: 'b', answerText: 'Cursors are used to maintain transactional integrity and consistency'},
			{ answerID: 'c', answerText: 'Locks are used to maintain transactional integrity and consistency'},
			{ answerID: 'd', answerText: 'Triggers are used to maintain transactional integrity and consistency'},
		],
		correctResponse: 'c',
	},
    {
		id: 17,
		questionText: "The Banker's algorithm is used",
		answerOptions: [
			{ answerID: 'a', answerText: 'to rectify deadlock'},
			{ answerID: 'b', answerText: 'to detect deadlock'},
			{ answerID: 'c', answerText: 'to prevent deadlock'},
			{ answerID: 'd', answerText: 'to solve deadlock'},
		],
		correctResponse: 'c',
	},
    {
		id: 18,
		questionText: 'A semaphore in synchronization process is used for',
		answerOptions: [
			{ answerID: 'a', answerText: 'Mutual Exclusion'},
			{ answerID: 'b', answerText: 'Synchronization'},
			{ answerID: 'c', answerText: 'Resource allocation'},
			{ answerID: 'd', answerText: 'All the above'},
		],
		correctResponse: 'd',
	},
    {
		id: 19,
		questionText: 'Which storage class in C specifies that the variable has global scope but limited visibility?',

		answerOptions: [
			{ answerID: 'a', answerText: 'auto'},
			{ answerID: 'b', answerText: 'static'},
			{ answerID: 'c', answerText: 'register'},
			{ answerID: 'd', answerText: 'extern'},
		],
		correctResponse: 'd',
	},
    {
		id: 20,
		questionText: 'How many bytes does 4 kilobytes represent? ',

		answerOptions: [
			{ answerID: 'a', answerText: '512'},
			{ answerID: 'b', answerText: '1024'},
			{ answerID: 'c', answerText: '4096'},
			{ answerID: 'd', answerText: '8192'},
		],
		correctResponse: 'c',
	},
    {
		id: 21,
		questionText: 'Guess the output of the c program',
		code:
`#include <stdio.h>
int main()
{
	int i = 3;
	printf("%d", (++i)++);
	return 0;
}`,

		answerOptions: [
			{ answerID: 'a', answerText: '3'},
			{ answerID: 'b', answerText: '4'},
			{ answerID: 'c', answerText: '5'},
			{ answerID: 'd', answerText: 'compile-time error'},
		],
		correctResponse: 'd',
	},

    {
		id: 22,
		questionText: 'What will be the output of the following C code?',
        code:
`#include <stdio.h>
int m()
{
    printf("hello");
}
void main()
{
    int k = m();
    printf("%d", k);
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'hello5'},
			{ answerID: 'b', answerText: 'Error'},
			{ answerID: 'c', answerText: 'Nothing'},
			{ answerID: 'd', answerText: 'Junk value'},
		],
		correctResponse: 'a',
	},

    {
		id: 23,
		questionText: 'What will be the output of the following C code?',
        code:
`#include <stdio.h>
	void fun() {
	static int x = 0;
	printf("%d ", ++x);

int main() {
	fun();
	fun();
	return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '1 2'},
			{ answerID: 'b', answerText: '1 1'},
			{ answerID: 'c', answerText: '2 2'},
			{ answerID: 'd', answerText: '2 1'},
		],
		correctResponse: 'a',
	},

    {
		id: 24,
		questionText: 'What will be the output of the following C code?',
        code:
        `
#include<string.h>
#include<stdio.h>
int main() {
    char p[]="codecombat";
    char t;
    int i,j;
    for(i=0,j=strlen(p);i!=j;i++,j--)
    {
        t=p[i];
        p[i]=p[j-i];
        p[j-i]=t;
    }
    printf("%s",p);
    return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Nothing is printed on the screen'},
			{ answerID: 'b', answerText: 'codecombat'},
			{ answerID: 'c', answerText: 'tabmocedoc'},
			{ answerID: 'd', answerText: 'code combat'},
		],
		correctResponse: 'a',
	},
    {
		id: 25,
		questionText: 'Consider the following C declaration',
        code:
`struct{
short s[5];
union {
	float y;
	long z;
	}u;
} t;
Assume that objects of the type short, float and long occupy 2 bytes, 4 bytes and 8 bytes, respectively.
The memory requirement for variable t, ignoring alignment considerations, is `,
		answerOptions: [
			{ answerID: 'a', answerText: '22 bytes '},
			{ answerID: 'b', answerText: '14 bytes'},
			{ answerID: 'c', answerText: '18 bytes'},
			{ answerID: 'd', answerText: '10 bytes'},
		],
		correctResponse: 'c',
	},
    {
		id: 26,
		questionText: 'What will be the output of the following C code? ',
        code:
`#include <stdio.h>
int main()
{
   printf(4 + "CodeCombat");
   return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Combat'},
			{ answerID: 'b', answerText: 'Code'},
			{ answerID: 'c', answerText: '1005'},
			{ answerID: 'd', answerText: 'Compile-time error'},
		],
		correctResponse: 'a',
	},
    {
		id: 27,
		questionText: 'But given the following definitions (along-with initialization) of 2D arrays',
        code:
`int array2D[2][4] = {1,2,3,4,5,6,7,8}; /* (i) */
int array2D[][4] = {1,2,3,4,5,6,7,8}; /* (ii) */
int array2D[2][] = {1,2,3,4,5,6,7,8}; /* (iii) */
int array2D[][] = {1,2,3,4,5,6,7,8}; /* (iv) */`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Only (i) is correct.'},
			{ answerID: 'b', answerText: 'Only (i) and (ii) are correct.'},
			{ answerID: 'c', answerText: 'Only (i), (ii) and (iii) are correct.'},
			{ answerID: 'd', answerText: 'All (i), (ii), (iii) and (iv) are correct.'},
		],
		correctResponse: 'b',
	},
    {
		id: 28,
		questionText: 'What will be the output of the following Python code?',
        code:
`list1 = [1, 3]
list2 = list1
list1[0] = 4
print(list2)`,
		answerOptions: [
			{ answerID: 'a', answerText: '[1, 4]'},
			{ answerID: 'b', answerText: '[1, 3, 4]'},
			{ answerID: 'c', answerText: '[4,3]'},
			{ answerID: 'd', answerText: '[1,3]'},
		],
		correctResponse: 'c',
	},
    {
		id: 29,
		questionText: 'Which of the following Python statements will result in the output: 6?',
        code:
`A =[[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]]`,
		answerOptions: [
			{ answerID: 'a', answerText: "A[2][1]"},
			{ answerID: 'b', answerText: "A[1][2]"},
			{ answerID: 'c', answerText: "A[3][2]"},
			{ answerID: 'd', answerText: "A[2][3]"},
		],
		correctResponse: 'b',
	},
    {
		id: 30,
		questionText: 'Find the output of the following program:',
        code:
`D = dict()
for x in enumerate(range(2)):
	D[x[0]] = x[1]
	D[x[1]+7] = x[0]
print(D)
		`,
		answerOptions: [
			{ answerID: 'a', answerText: "{0: 1, 7: 0, 1: 1, 8: 0}"},
			{ answerID: 'b', answerText: "{0: 1, 7: 0, 1: 1, 8: 0}"},
			{ answerID: 'c', answerText: "{0: 0, 7: 0, 1: 1, 8: 1}"},
			{ answerID: 'd', answerText: "key error"},
		],
		correctResponse: 'c',
	},
    {
		id: 31,
		questionText: 'What will be the output of the following Python code?',
        code:
`l=[1, 0, 2, 0, 'hello', '', []]
list(filter(bool, l))`,
		answerOptions: [
			{ answerID: 'a', answerText: `[1, 0, 2, 'hello', ”, []]`},
			{ answerID: 'b', answerText: 'Error'},
			{ answerID: 'c', answerText: `[1, 2, 'hello']`},
			{ answerID: 'd', answerText: `[1, 0, 2, 0, 'hello', ”, []]`},
		],
		correctResponse: 'c',
	},
    {
		id: 32,
		questionText: 'What will be the output of the following Python program?',
        code:
`def addItem(listParam):
	listParam += [1]

mylist = [1, 2, 3, 4]
addItem(mylist)
print(len(mylist))
    `,
		answerOptions: [
			{ answerID: 'a', answerText: '5'},
			{ answerID: 'b', answerText: '8'},
			{ answerID: 'c', answerText: '2'},
			{ answerID: 'd', answerText: '1'},
		],
		correctResponse: 'a',
	},
    {
		id: 33,
		questionText: 'Which of the following functions cannot be used with lambda functions?',
		answerOptions: [
			{ answerID: 'a', answerText: 'map()'},
			{ answerID: 'b', answerText: 'filter()'},
			{ answerID: 'c', answerText: "remove()"},
			{ answerID: 'd', answerText: 'reduce()'},
		],
		correctResponse: 'c',
	},
    {
		id: 34,
		questionText: 'Which of the following is the output of the following code? ',
        code:
`list1=[1,-2,3]
[[i+j for i in list2] for j in list1]`,
		answerOptions: [
			{ answerID: 'a', answerText: '[2, 4, 5, 9, 10, 1, -1, 1, 2, 6, 7, -2, 4, 6, 7, 11, 12, 3]'},
			{ answerID: 'b', answerText: '[2, -1, 4, 4, 1, 6, 5, 2, 7, 9, 6, 11,10, 7, 12, 1, -2, 3]'},
			{ answerID: 'c', answerText: '[[2, 4, 5, 9, 10, 1], [-1, 1, 2, 6, 7, -2], [4, 6, 7, 11, 12, 3]]'},
			{ answerID: 'd', answerText: '[[2, -1, 4, 4, 1, 6], [5, 2, 7, 9, 6, 11],[10, 7, 12, 1, -2, 3]]'},
		],
		correctResponse: 'c',
	},
    {
		id: 35,
		questionText: 'What will be the output of the following code?',
        code:
`tup=(1,'t',8.5,6,'y',True)
tup[:-2]`,
		answerOptions: [
			{ answerID: 'a', answerText: "(1, 't', 8.5, 6,'y')"},
			{ answerID: 'b', answerText: "(1, 't', 8.5, 6)"},
			{ answerID: 'c', answerText: "(6, 8.5, 't', 1)"},
			{ answerID: 'd', answerText: "('y', 6, 8.5, 't', 1 )"},
		],
		correctResponse: 'b',
	},
    {
		id: 36,
		questionText: "What will be the output of the python function",
        code:
`min(max(False,-3,-4), 2,7)`,
		answerOptions: [
			{ answerID: 'a', answerText: '-4'},
			{ answerID: 'b', answerText: '-3'},
			{ answerID: 'c', answerText: '2'},
			{ answerID: 'd', answerText: 'False'},
		],
		correctResponse: 'd',
	},
    {
		id: 37,
		questionText: 'Study the following program and find the output:',
        code:
`// precondition: x>=0
public void demo(int x)
{
	System.out.print(x % 10);
	if (x % 10 != 0) {
		demo(x / 10);
	}
	System.out.print(x % 10);
}
`,
		answerOptions: [
			{ answerID: 'a', answerText: '1441'},
			{ answerID: 'b', answerText: '3443'},
			{ answerID: 'c', answerText: '12344321'},
			{ answerID: 'd', answerText: '4321001234'},
		],
		correctResponse: 'd',
	},
    {
		id: 38,
		questionText: 'What will happen when you attempt to compile and run the following code?',
        code:
`class A implements Runnable{
    public void run(){
          System.out.println("run-A");
    }
}

public class Test{
    public static void main(String argv[]){
        A a = new A();
        Thread t = new Thread(a);
        System.out.println(t.isAlive());
        t.start();
        System.out.println(t.isAlive());
            }
      }
      `,
		answerOptions: [
			{ answerID: 'a', answerText: 'false run-A true'},
			{ answerID: 'b', answerText: 'false run-A false'},
			{ answerID: 'c', answerText: 'true run-A true'},
			{ answerID: 'd', answerText: 'Compilation fails due to an error on line 7'},
		],
		correctResponse: 'a',
	},
    {
		id: 39,
		questionText: 'Output of following Java Program?',
        code:
`class Base {
    public void show() {
       System.out.println("Base::show() called");
    }
}
class Derived extends Base {
    public void show() {
       System.out.println("Derived::show() called");
    }
}

public class Main {
    public static void main(String[] args) {
        Base b = new Derived();
        b.show();
    }
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Derived::show() called'},
			{ answerID: 'b', answerText: 'Base::show() called'},
			{ answerID: 'c', answerText: 'Compiler error'},
			{ answerID: 'd', answerText: 'Program terminates'},
		],
		correctResponse: 'a',
	},
    {
		id: 40,
		questionText: 'How many objects will be created in the following?',
        code:
`String a = new String(“CodeCombat”);
String b = new String(“CodeCombat”);
Strinc c = “CodeCombat”;
String d = “CodeCombat”;
    `,
		answerOptions: [
			{ answerID: 'a', answerText: '2'},
			{ answerID: 'b', answerText: '3'},
			{ answerID: 'c', answerText: '4'},
			{ answerID: 'd', answerText: '1'},
		],
		correctResponse: 'b',
	},
    {
		id: 41,
		questionText: 'Identify the correct restriction on static methods.',
        code:
`I.They must access only static data
II.They can only call other static methods.
III.They cannot refer to this or super.`,
		answerOptions: [
			{ answerID: 'a', answerText: 'I and II'},
			{ answerID: 'b', answerText: 'II and III'},
			{ answerID: 'c', answerText: 'Only III'},
			{ answerID: 'd', answerText: 'I,II and III'},
		],
		correctResponse: 'd',
	},
    {
		id: 42,
		questionText: 'Find the output of the following program',
        code:
`public class Solution{
    public static void main(String[] args){
            int[]  x = {120, 200, 016};
            for(int i = 0; i < x.length; i++){
                     System.out.print(x[i] + “ “);
            }
    }
}
    `,
		answerOptions: [
			{ answerID: 'a', answerText: '120 200 016'},
			{ answerID: 'b', answerText: '120 200 14 '},
			{ answerID: 'c', answerText: '120 200 16'},
			{ answerID: 'd', answerText: 'None'},
		],
		correctResponse: 'd',
	},
    {
		id: 43,
		questionText: 'Find the output of the following code',
        code:
`int ++a = 100;
System.out.println(++a);
        `,
		answerOptions: [
			{ answerID: 'a', answerText: '101'},
			{ answerID: 'b', answerText: "Compile error as ++a is not valid identifier "},
			{ answerID: 'c', answerText: '100'},
			{ answerID: 'd', answerText: 'Runtime Error'},
		],
		correctResponse: 'b',
	},
    {
		id: 44,
		questionText: 'Type IV JDBC driver is a driver',
		answerOptions: [
			{ answerID: 'a', answerText: 'which is written in C++'},
			{ answerID: 'b', answerText: "which requires an intermediate layer"},
			{ answerID: 'c', answerText: 'which communicates through Java sockets'},
			{ answerID: 'd', answerText: 'which translates JDBC function calls into API not native to DBMS'},
		],
		correctResponse: 'c',
	},
    {
		id: 45,
		questionText: 'Which of the following statements is/are TRUE regarding JAVA ?',
		code:
`(I) Constants that cannot be changed are declared using the ‘static’ keyword.
(II) A class can only inherit one class but can implement multiple interfaces.
		`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Only (I) is TRUE.'},
			{ answerID: 'b', answerText: 'Only (II) is TRUE.'},
			{ answerID: 'c', answerText: 'Both (I) and (II) are TRUE.'},
			{ answerID: 'd', answerText: 'Neither (I) nor (II) are TRUE.'},
		],
		correctResponse: 'b',
	},

]