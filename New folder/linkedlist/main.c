#include<stdio.h>
#include<stdlib.h>

struct Node{
    int data;
    struct Node* next;
};

void insert(struct Node** head_ref, int new_node){
    struct Node* new_data = (struct Node*)malloc(sizeof(struct Node));
    new_data -> data = new_node;
    new_data -> next = *head_ref;
    *head_ref = new_data;
}

void printList(struct Node* node){
    while (node != NULL){
        printf("%d\t", node -> data);
        node = node->next;
    }
    printf("\n");
}

int main(){

    struct Node* head = NULL;

    insert(&head, 1);
    insert(&head, 34);
    insert(&head, 89);



    return 0;
}