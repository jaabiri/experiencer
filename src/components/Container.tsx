﻿import Editable, { EditableState, EditableProps, MultiEditable, MultiEditableState } from "./Editable";
import ChildHolder from "./ChildHolder";
import React = require("react");
import IContainer from "./IContainer";

export interface EditableContainerState extends ContainerState, EditableState { }

export interface MultiEditableContainerState extends ContainerState, MultiEditableState { }

export interface ContainerState {
    children: ChildHolder;
}

function deleteChild<P, S extends ContainerState>(this: IContainer<P, S>, idx: number) {
    this.setState({
        children: this.state.children.deleteChild(idx)
    });
}

export class Container<
    Props = {},
    State extends ContainerState = EditableContainerState>
    extends React.Component<Props, State>
    implements IContainer {

    defaultChild: JSX.Element;

    constructor(props: Props) {
        super(props);

        this.addChild = this.addChild.bind(this);
        this.deleteChild = this.deleteChild.bind(this);
    }

    addChild() {
        this.setState({
            children: this.state.children.addChild(
                React.cloneElement(this.defaultChild))
        });
    }

    deleteChild(idx: number) {
        this.setState({
            children: this.state.children.deleteChild(idx)
        });
    }
}

export class EditableContainer<
    Props extends EditableProps = {},
    State extends EditableContainerState = EditableContainerState>
    extends Editable<Props, State>
    implements IContainer
{

    defaultChild: JSX.Element;

    constructor(props: Props) {
        super(props);

        this.addChild = this.addChild.bind(this);
        this.deleteChild = this.deleteChild.bind(this);
    }

    addChild() {
        this.setState({
            children: this.state.children.addChild(
                React.cloneElement(this.defaultChild))
        });
    }

    deleteChild(idx: number) {
        this.setState({
            children: this.state.children.deleteChild(idx)
        });
    }
}

export class MultiEditableContainer<
    Props = {},
    State extends MultiEditableContainerState = MultiEditableContainerState>
    extends MultiEditable<Props, State>
    implements IContainer {

    defaultChild: JSX.Element;

    constructor(props: Props) {
        super(props);

        this.addChild = this.addChild.bind(this);
        this.deleteChild = this.deleteChild.bind(this);
    }

    addChild() {
        this.setState({
            children: this.state.children.addChild(
                React.cloneElement(this.defaultChild))
        });
    }

    deleteChild(idx: number) {
        this.setState({
            children: this.state.children.deleteChild(idx)
        });
    }
}