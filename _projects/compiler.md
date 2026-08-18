---
title: "Compiler"
context: "Compiler Design, BUET"
year: 2025
order: 2
meta: "Compiler Design, BUET · 2025"
links:
  - label: "Github"
    url: https://github.com/mehedikhan72/CSE310-Compiler
  - label: "Details"
    url: self
blurb: >
  A full compiler for a subset of the C programming language, built for CSE310: Compiler Design course.
  Implements the complete compilation pipeline from tokenization to code generation, featuring modern C++
  symbol tables, Flex lexical analysis, ANTLR4 parsing, and x86 assembly output that runs on real emulators.
---

A full compiler for a subset of the C programming language, built for CSE310: Compiler Design course. Implements the complete compilation pipeline from tokenization to code generation, featuring modern C++ symbol tables, Flex lexical analysis, ANTLR4 parsing, and x86 assembly output that runs on real emulators.

### Tech Stack

C++, Flex (yyFlex), ANTLR4, x86 Assembly, Java, Shell Scripting, EMU8086, DOSBox.

### Compilation Pipeline

The compiler follows a complete multi-stage pipeline: Input C subset → Lexical Analyzer (Flex) → Tokens → Parser (ANTLR4) → Abstract Syntax Tree → Symbol Table Construction → Semantic Analysis & Intermediate Code Generation → x86 Assembly Output. Each stage is modular and handles specific aspects of the compilation process, ensuring clean separation of concerns and educational clarity.

### Key Features

The compiler includes a modern C++ symbol table implementation, lexical analysis using Flex, parsing with ANTLR4's C++ implementation, intermediate code generation using ANTLR visitors, and final code output in x86 Assembly. The generated .asm files are executable in emulators like EMU8086 and DOSBox, making it a practical tool for understanding low-level code generation.

### Example Transformation

A simple C-like program with variable declarations and arithmetic operations gets transformed through the entire pipeline. For instance, a program declaring integers and performing addition gets converted to proper x86 assembly with stack management, register operations, and system calls for output. This demonstrates the compiler's ability to handle real-world code generation scenarios.

### Learning Outcomes

This project taught me to implement a multi-stage compiler using real industry tools. I learned about designing grammar rules and resolving ambiguities, managing memory and scopes using custom symbol tables, generating working 8086 assembly code for real emulators, and writing automation scripts to streamline the toolchain. The experience provided deep insights into how high-level languages are transformed into executable machine code.

### Technical Challenges

Building this compiler involved several complex challenges: integrating Flex and ANTLR4 in a seamless workflow, implementing proper symbol table management with scope handling, generating correct x86 assembly with proper stack management and register allocation, and ensuring the output assembly runs correctly on real emulators. Each stage required careful attention to detail and understanding of compiler theory principles.
