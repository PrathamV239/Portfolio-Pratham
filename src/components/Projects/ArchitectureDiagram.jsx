import React from 'react';
import './ArchitectureDiagram.css';

export default function ArchitectureDiagram({ type }) {
  if (type === 'gateway') {
    return (
      <div className="arch-diagram-box">
        <div className="diagram-header">
          <span className="diagram-title">SYSTEM TOPOLOGY // SPRING CLOUD REACTIVE GATEWAY</span>
          <span className="diagram-badge">NON-BLOCKING IO</span>
        </div>
        <div className="topology-flow">
          <div className="topo-node client">
            <span className="node-tag">CLIENT REQUEST</span>
            <span className="node-name">HTTP / REST</span>
          </div>
          <div className="topo-arrow">→</div>
          <div className="topo-node gateway active">
            <span className="node-tag">SPRING CLOUD GATEWAY</span>
            <span className="node-name">Netty Reactor Router</span>
            <div className="node-subspec">7 Telemetry Fields</div>
          </div>
          <div className="topo-arrow">→</div>
          <div className="topo-node redis">
            <span className="node-tag">REDIS SLIDING WINDOW</span>
            <span className="node-name">Rate Limiter (20 r/s)</span>
          </div>
          <div className="topo-arrow">→</div>
          <div className="topo-node circuit">
            <span className="node-tag">RESILIENCE4J</span>
            <span className="node-name">Circuit Breaker</span>
            <div className="node-subspec">Sub-15s Failure Detect</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'rag') {
    return (
      <div className="arch-diagram-box">
        <div className="diagram-header">
          <span className="diagram-title">SYSTEM TOPOLOGY // LOCAL-FIRST RAG PIPELINE & SEMANTIC CACHE</span>
          <span className="diagram-badge">60%+ COST SAVED</span>
        </div>
        <div className="topology-flow">
          <div className="topo-node pdf">
            <span className="node-tag">INPUT DATA</span>
            <span className="node-name">PDF / 500+ Docs</span>
          </div>
          <div className="topo-arrow">→</div>
          <div className="topo-node cache active">
            <span className="node-tag">REDIS VECTOR CACHE</span>
            <span className="node-name">Semantic Embedding Intercept</span>
            <div className="node-subspec">Bypasses Repeat LLM Calls</div>
          </div>
          <div className="topo-arrow">→</div>
          <div className="topo-node vector">
            <span className="node-tag">PGVECTOR / OLLAMA</span>
            <span className="node-name">Llama 3.1 Local LLM</span>
            <div className="node-subspec">Grounded Citations</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'websocket') {
    return (
      <div className="arch-diagram-box">
        <div className="diagram-header">
          <span className="diagram-title">SYSTEM TOPOLOGY // DISTRIBUTED WEBSOCKET & REDIS PUB/SUB</span>
          <span className="diagram-badge">SUB-100MS SYNC</span>
        </div>
        <div className="topology-flow">
          <div className="topo-node client">
            <span className="node-tag">10 CONCURRENT USERS</span>
            <span className="node-name">React Drag & Drop</span>
          </div>
          <div className="topo-arrow">→</div>
          <div className="topo-node spring active">
            <span className="node-tag">SPRING BOOT WEBSOCKET</span>
            <span className="node-name">Real-Time Event Handler</span>
          </div>
          <div className="topo-arrow">→</div>
          <div className="topo-node pubsub">
            <span className="node-tag">REDIS PUB/SUB</span>
            <span className="node-name">3 Backend Container Nodes</span>
            <div className="node-subspec">Resolves Drag Race Conditions</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="arch-diagram-box">
      <div className="diagram-header">
        <span className="diagram-title">SYSTEM ARCHITECTURE</span>
      </div>
      <div className="topology-flow">
        <div className="topo-node active">
          <span className="node-tag">FULL-STACK ENGINE</span>
          <span className="node-name">Production Service</span>
        </div>
      </div>
    </div>
  );
}
