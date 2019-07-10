import Component, { tracked } from '@glimmer/component';

export default class GlimmerTrackedIssue extends Component {
  title = "Welcome to Glimmer Native"

  @tracked count = 0;

  clicked() {
    this.count = this.count + 1;
  }
}
