import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-testbranch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-testbranch.component.html',
  styleUrl: './why-testbranch.component.scss'
})
export class WhyTestbranchComponent {
  features= [
    { icon: 'all.png', title: 'All in one platform', description: 'Easily design, edit, approve and issue certificates.' },
    { icon: 'user.png', title: 'User-friendly Interface', description: 'Feature rich and is easy to use.' },
    { icon: 'real.png', title: 'Real time Collaboration', description: 'Collaborate with others to approve and issue certificates.' },
    { icon: 'apply.png', title: 'Apply Complex Conditions', description: 'Create simple or complex conditions in which to issue certificates.' },
    { icon: 'integrate.png', title: 'Integrate Instantly', description: 'Easily integrate TestBranch into your workflow.' },
    { icon: 'nft.png', title: 'NFT based Storage', description: 'Data secured on Blockchain: safe, accessible, no misuse.' }
  ];
}
