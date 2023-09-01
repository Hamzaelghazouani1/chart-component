import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(...registerables);
Chart.register(zoomPlugin);

@Component({
  selector: 'app-chart-zoom',
  templateUrl: './chart-zoom.component.html',
  styleUrls: ['./chart-zoom.component.css']
})
export class ChartZoomComponent implements AfterViewInit,OnChanges{

  @Input() data:any[] = [];
  @Input() label:any[] = [];
  @Input() type:any = "bar";
  @Input() title:string = 'Custom Chart Subtitle';

  canvas: any;
  ctx: any;
  private chart: any;
  @ViewChild('chart') mychart!:ElementRef<HTMLElement>;

  colorChart:string = "rgb(156, 43, 43)";
  colorFillChart:string = "#85061162";

  ngOnChanges(): void {
    if(this.chart != undefined){this.chart.config.type = this.type; this.chart.update();}; 
  }

  ngAfterViewInit(): void {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.colorChart = this.data[this.data.length-1] < this.data[this.data.length-2] ? "rgb(156, 43, 43)" : "rgb(48, 129, 59)";
    this.colorFillChart = this.data[this.data.length-1] < this.data[this.data.length-2] ? "#85061162" : "#06852c62";
    this.chartsData();
  }

  chartsData():void{
    this.chart = new Chart(this.ctx, {
      type: this.type,
      data: {
          datasets: [{
              label: this.title,
              data: this.data,
              fill: true,
              tension: 0.6,
              pointRadius: 0,
              borderWidth: 1
          }],
          labels: this.label
      },options: {
        scales: {
          x:{
            grid:{
            drawBorder:false,
            drawOnChartArea:false,
            },display:true
          },
          y:{
            grid:{
              drawBorder:false,
              drawOnChartArea:false,
            },display:true
          }
        },plugins: {
          zoom: {
            pan:{
              enabled: true,
              mode:'xy',
              overScaleMode:'x',
              },zoom:{
                mode:'x',
                wheel:{
                  enabled:true,
                  speed:0.1
                },
                drag:{
                  enabled:true,
                  backgroundColor:'#777f8a7a'
                },
                pinch:{
                  enabled:true
                }
              }
          },
            title: {
                display: false,
                text: this.title,
            },legend:{
              display:false
            }
        }
      }
   });
  }

  restZoom(){
    this.chart.resetZoom();
  }
  restZoomIn(){
    this.chart.zoom(1.1);
  }
  restZoomOut(){
    this.chart.zoom(0.9);
  }

}
