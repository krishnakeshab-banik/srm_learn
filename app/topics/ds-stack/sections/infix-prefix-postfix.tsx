// Infix, Prefix, and Postfix Conversion Section - extracted and adapted from https://www.algorithmroom.com/dsa/infix-prefix-and-postfix-conversion-in-stack
"use client"

import CodeEditor from "../../ds-array/code-editor"

export default function InfixPrefixPostfixSection() {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-4 underline">Infix, Prefix & Postfix Conversion in Stack</h3>
      <p className="mb-4">
        Another application of stack is calculation of postfix expression. There are basically three types of notation for an expression (mathematical expression; An expression is defined as the number of operands or data items combined with several operators.)
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Infix Notation:</b> Operators are written between operands (e.g., <code>3 + 4</code>).</li>
        <li><b>Prefix Notation:</b> Operators are written before operands (e.g., <code>+ 3 4</code>).</li>
        <li><b>Postfix Notation:</b> Operators are written after operands (e.g., <code>3 4 +</code>).</li>
      </ul>
      <div className="mb-4">
        <b>Precedence and Associativity:</b>
        <ul className="list-disc pl-6">
          <li><b>Parentheses ( ):</b> Force priority, group expressions manually.</li>
          <li><b>Exponentiation (^):</b> Highest among arithmetic operators.</li>
          <li><b>Multiply, Divide, Modulus (*, /, %):</b> Next highest.</li>
          <li><b>Addition, Subtraction (+, -):</b> Lowest precedence.</li>
          <li>Operators with the same precedence (like + and - or * and /) are left-associative (evaluated left to right).</li>
        </ul>
      </div>
      <div className="mb-4">
        <b>Algorithm for Infix to Postfix Conversion:</b>
        <ol className="list-decimal pl-6">
          <li>Initialize an empty stack for operators and an empty list for the result (postfix expression).</li>
          <li>Scan the infix expression from left to right.</li>
          <li>
            For each character:
            <ul className="list-disc pl-6">
              <li>If operand: Add to result.</li>
              <li>If '(': Push to stack.</li>
              <li>If ')': Pop from stack to result until '(' is found. Discard '('.</li>
              <li>If operator: While stack top has greater or equal precedence (and is left-associative), pop to result. Push current operator.</li>
            </ul>
          </li>
          <li>After processing, pop remaining operators from stack to result.</li>
        </ol>
      </div>
      <div className="mb-4">
        <b>Example: Infix to Postfix Conversion</b>
        <div className="bg-gray-50 rounded p-3 my-2 text-sm">
          <b>Infix:</b> 3 + 4 * 2 / (1 - 5)<br />
          <b>Step-by-step:</b>
          <ul className="list-decimal pl-6">
            <li>Read 3 (operand): Add to result → [3]</li>
            <li>Read + (operator): Push to stack → [+]</li>
            <li>Read 4 (operand): Add to result → [3, 4]</li>
            <li>Read * (operator): Higher precedence than +, push → [+, *]</li>
            <li>Read 2 (operand): Add to result → [3, 4, 2]</li>
            <li>Read / (operator): Same precedence as *, pop * to result, push / → [+, /], result: [3, 4, 2, *]</li>
            <li>Read ( : Push to stack → [+, /, (]</li>
            <li>Read 1 (operand): Add to result → [3, 4, 2, *, 1]</li>
            <li>Read - (operator): Push to stack → [+, /, (, -]</li>
            <li>Read 5 (operand): Add to result → [3, 4, 2, *, 1, 5]</li>
            <li>Read ) : Pop - to result, pop (, discard → [+, /], result: [3, 4, 2, *, 1, 5, -]</li>
            <li>End: Pop / and + to result → [], result: [3, 4, 2, *, 1, 5, -, /, +]</li>
          </ul>
          <b>Postfix:</b> 3 4 2 * 1 5 - / +
        </div>
      </div>
      <div className="mb-4">
        <b>Complex Example:</b>
        <div className="overflow-x-auto">
          <table className="table-auto border mb-2 text-xs">
            <thead>
              <tr>
                <th className="border px-2">Character</th>
                <th className="border px-2">Stack (Operator)</th>
                <th className="border px-2">Output (Postfix)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2">(</td><td className="border px-2">(</td><td className="border px-2"></td></tr>
              <tr><td className="border px-2">A</td><td className="border px-2">(</td><td className="border px-2">A</td></tr>
              <tr><td className="border px-2">+</td><td className="border px-2">( +</td><td className="border px-2">A</td></tr>
              <tr><td className="border px-2">(</td><td className="border px-2">( + (</td><td className="border px-2">A</td></tr>
              <tr><td className="border px-2">B</td><td className="border px-2">( + (</td><td className="border px-2">A B</td></tr>
              <tr><td className="border px-2">*</td><td className="border px-2">( + ( *</td><td className="border px-2">A B</td></tr>
              <tr><td className="border px-2">C</td><td className="border px-2">( + ( *</td><td className="border px-2">A B C</td></tr>
              <tr><td className="border px-2">-</td><td className="border px-2">( + ( -</td><td className="border px-2">A B C *</td></tr>
              <tr><td className="border px-2">(</td><td className="border px-2">( + ( - (</td><td className="border px-2">A B C *</td></tr>
              <tr><td className="border px-2">D</td><td className="border px-2">( + ( - (</td><td className="border px-2">A B C * D</td></tr>
              <tr><td className="border px-2">/</td><td className="border px-2">( + ( - ( /</td><td className="border px-2">A B C * D</td></tr>
              <tr><td className="border px-2">E</td><td className="border px-2">( + ( - ( /</td><td className="border px-2">A B C * D E</td></tr>
              <tr><td className="border px-2">^</td><td className="border px-2">( + ( - ( / ^</td><td className="border px-2">A B C * D E</td></tr>
              <tr><td className="border px-2">F</td><td className="border px-2">( + ( - ( / ^</td><td className="border px-2">A B C * D E F</td></tr>
              <tr><td className="border px-2">)</td><td className="border px-2">( + ( -</td><td className="border px-2">A B C * D E F ^ /</td></tr>
              <tr><td className="border px-2">*</td><td className="border px-2">( + ( - *</td><td className="border px-2">A B C * D E F ^ /</td></tr>
              <tr><td className="border px-2">G</td><td className="border px-2">( + ( - *</td><td className="border px-2">A B C * D E F ^ / G</td></tr>
              <tr><td className="border px-2">)</td><td className="border px-2">( +</td><td className="border px-2">A B C * D E F ^ / G * -</td></tr>
              <tr><td className="border px-2">*</td><td className="border px-2">( + *</td><td className="border px-2">A B C * D E F ^ / G * -</td></tr>
              <tr><td className="border px-2">H</td><td className="border px-2">( + *</td><td className="border px-2">A B C * D E F ^ / G * - H</td></tr>
              <tr><td className="border px-2">)</td><td className="border px-2"></td><td className="border px-2">A B C * D E F ^ / G * - H * +</td></tr>
            </tbody>
          </table>
          <b>Postfix Expression:</b> A B C * D E F ^ / G * - H * +
        </div>
      </div>
      <div className="mb-4">
        <b>C Code for Infix to Postfix Conversion:</b>
        <CodeEditor
          language="c"
          initialCode={`#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#define MAX 100

char stack[MAX];
int top = -1;

int isOperator(char c) {
    return (c == '+' || c == '-' || c == '*' || c == '/' || c == '^');
}
int isOperand(char c) {
    return isdigit(c);
}
int precedence(char c) {
    if (c == '+' || c == '-') return 1;
    else if (c == '*' || c == '/') return 2;
    else if (c == '^') return 3;
    return -1;
}
void push(char c) {
    if (top == (MAX - 1)) printf("Stack Overflow\\n");
    else stack[++top] = c;
}
char pop() {
    if (top == -1) {
        printf("Stack Underflow\\n");
        return -1;
    } else {
        return stack[top--];
    }
}
char peek() {
    if (top == -1) return -1;
    return stack[top];
}
void infixToPostfix(char* infix, char* postfix) {
    int i = 0, j = 0;
    char current;
    while (infix[i] != '\\0') {
        current = infix[i];
        if (isOperand(current)) {
            postfix[j++] = current;
        } else if (current == '(') {
            push(current);
        } else if (current == ')') {
            while (top != -1 && peek() != '(') {
                postfix[j++] = pop();
            }
            pop();
        } else if (isOperator(current)) {
            while (top != -1 && precedence(peek()) >= precedence(current)) {
                postfix[j++] = pop();
            }
            push(current);
        }
        i++;
    }
    while (top != -1) {
        postfix[j++] = pop();
    }
    postfix[j] = '\\0';
}

int main() {
    char infix[MAX], postfix[MAX];
    printf("Enter an infix expression: ");
    fgets(infix, sizeof(infix), stdin);
    infixToPostfix(infix, postfix);
    printf("Postfix expression: %s\\n", postfix);
    return 0;
}`}
        />
      </div>
      <div className="mb-4">
        <b>Explanation:</b>
        <ul className="list-disc pl-6">
          <li><b>stack[MAX]:</b> Character array for operators and parentheses.</li>
          <li><b>top:</b> Integer for stack top.</li>
          <li><b>isOperator():</b> Checks if character is operator.</li>
          <li><b>isOperand():</b> Checks if character is operand (digit).</li>
          <li><b>precedence():</b> Returns operator precedence.</li>
          <li><b>push(), pop(), peek():</b> Stack operations.</li>
          <li><b>infixToPostfix():</b> Converts infix to postfix using stack.</li>
          <li><b>main():</b> Reads infix, converts, prints postfix.</li>
        </ul>
      </div>
      <div className="mt-4">
        <b>Watch:</b> <a href="https://www.youtube.com/watch?v=9m5B_0Q2A8k" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Infix, Prefix & Postfix Conversion (YouTube)</a>
      </div>
    </section>
  )
}
