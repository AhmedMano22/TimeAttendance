import { Component, OnInit, ViewChild } from '@angular/core';
import { ITreeOptions, KEYS, TREE_ACTIONS } from '@circlon/angular-tree-component';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  // options: any
  @ViewChild('tree') tree : any;
  
  nodes = [
    {
      id: 1,
      name: 'Admin',
      children: [
        { id: 2,
          name: 'Assets',
          children: [
            { id: 3, name: 'Css', children: [ {id: 4, name: 'Css one'},{id: 5, name: 'Css two'},]},
            { id: 6, name: 'Js', children: [ {id: 7, name: 'Js one'},{id: 8, name: 'Js two'},]},
            { id: 9, name: 'Scss', children: [ {id: 10, name: 'Sub Child',children: [{id: 11, name: 'Sub File'},{id: 12, name: 'Sub File'},] },{id: 13, name: 'Scss two'},]},
          ]},
        { id: 14, name: 'Default', children: [{id: 15, name: 'Dashboard'},{id: 16, name: 'Typography'}] }
      ]
    },
    {
      id: 17,
      name: 'index file'
    }

  ];
  options: ITreeOptions = {
    useCheckbox: true,
    getChildren: this.getChildren.bind(this)
  };

  optionsDisabled: ITreeOptions = {
    useCheckbox: true,
    getChildren: this.getChildren.bind(this),
    useTriState: false,
  };

  getChildren(node: any) {
    const newNodes = [
      {
        name: 'child1'
      }, {
        name: 'child2'
      }
    ];

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(newNodes), 1000);
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }

}
